/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2JvJNiGKaqgnwypXA65Cgo2jgKG4skUrF3ZNAUY9c9fN3UFumXHmkXM57nkLw7R6m5Z2oGKAwVseX2gNutjT8m7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Js83iDVbtthAh1xBHeHJwKwJ1hpBjYdhcVuxcJfDdUQxXWgGctWhUGeJk5JKemBe8chfjh3zCNG169tN7z5C8U",
  "key1": "5nPVpxGB72My7bdzLPg82CC4kQmyyAztq3SFVGmcJbbbJr3zXeLUNXiW7icuQ628Muct8jUrzLhDe4CnRJJffpmq",
  "key2": "3Sek6Gwq9NgJLhs8gguc2EneeAP9L3NNpoXeKuGGFdbYyLoCqCtQCvSs2svHq6nrNBjw8e16emM3fbsy3Mzy6mVU",
  "key3": "3ktTkop5Z55fnHKCYd64SjNTXu7hwRc6dL5F15Q5uTV2Nwe8X76xU4GzVoruRZ4ZfEynAj7RHSUbz1VBZT8bMVkE",
  "key4": "3wtQgFg5kbDQY7uDZ3M1F7uWMposu2pm7cQcNWCaWBe4mTEZ17TzdZTKvA9Qmf9SHSQHNcs7T2AQPEgHtWd8gaKR",
  "key5": "2JMeCsqAA8TYQ8DMYCjaWd327UwQ26TTTj8WgJqWs42weM2r4cbZESLYXH354sqgJvz16kJKbsgzkpDeXUvwij35",
  "key6": "2BbDe9VymwPX5JEqLE6ftWd37G2jeHv84GaJahrnFCJyo8RgxfkWjnKq71JrzaSx52MAAVksM4uRBtGSQJNUBnhW",
  "key7": "4hLUMtiFKQBCzJYjAcxUsADqARSa878mdh6MYE5Vb1hyhb8xEE7aPjMmAFW8T8nEDeCbUXpzoEZyWKRC891CeeHH",
  "key8": "48Qd3Fd3pT2mU1oP9qZYHNf6itMVqYLZzkDxJ7xQ6t9KhcEsYMF3sBVrrhrvvHFPfnCi22Y67TtY2sBsCSkZWrfT",
  "key9": "2Ba1BRo4xLJaB39c2MDpwbxd7b4fj3MTd5pMtAAZ2YvSgDch8RTwhSTd6T1kbU7V6sPKq48VwE9ccAtVBsGfdLHq",
  "key10": "5ryk865PgaUH1Ck4FURuzQDPCgEdUaZ1CvS9UrtSckkAKgSjZSLroi7woBT9NEL9D26Z7b55riHuUDyJ3jPqinFV",
  "key11": "5Biib8TFxjB4Z5HTK9pJbNa6THaF3imTQAhS66HpLNuYk8QBdba7HQFmcooqNLjnqy8BAkuoAwx7fSxfWfgeThjY",
  "key12": "3H9nZNZWb7KuVJMP2wBjghkm3eCQuqhFUskpuvBw2ENv6kk2HCUeKWMbvzsAozp9pfyqmgwLKYcsTDBQeY1KLkLK",
  "key13": "KirA8CAiApL6RfYQAap3kbvZyzwC62unn2RvLkUUNyj2UdZn7WRzW3Z77SV4oHwbGTxT5Gp7Fa7FNCdyMMgx6cQ",
  "key14": "5JS1Z3TNWYfvGneMBwPsSN2ZoborjMKFxEQDA6zq7nySqgfvYvNadRoT2FhEtiPZmgaMAVqYCfDdNVux6qp5CeKP",
  "key15": "2G6pEx3V1aACAgQRgi7Jo3kE8oERuwxVQYnW4iTXMSNDVU6REAvJKvvrqKcrAgCUJfNte1YUq8UkeTnL3e2Z2c5W",
  "key16": "5y75U6RrRPSuhUrJUTxuBMqbxZ8ND4WrpPAsXYSCtJexAKVQhds77xrZ1agFNri6TZ6qfxBDfCa1FF6sfNDbE3yK",
  "key17": "CV9AQeAS2VRFmWzZE2SNk1PpfYAveVbmZ2xPLq3BSqnR6doJYveuGLotK46NhRAM6deqnkk5VmchxDGfgqhfw4U",
  "key18": "3HfSgtmfS46iewMJ5URD65TV4JzdsFCY58YVJF8DWbSAoBKfL4Kzgf6RD9JBWTtqKFC585ABxDAu6TctLAsyTiJr",
  "key19": "27bNQgQ6H65npoY24V3LgxmtzynzvdZYVHDGdnha37ju1ZWYvgNipA6MHXUi8ae7TRr3fTwRsLaYAaYhzHgaz6tt",
  "key20": "47Z88F5mSom5xKg6bfUCdhHtdAaKXyW8LqGemebzgMztGGTd75ohJ7Nx7knW1hpe4RcswDx2MyENo2MLA6bVW61f",
  "key21": "4iA35jY6SHvmnbhQaHTNigRJmTsGhBpZDXVqWYBEcfzJCRbEAHfvv8BANCRUMkLkP1qYGduEKbdfNoDzfarq7BX7",
  "key22": "47XsqXxQRuEd5LShtnf2AHCEHx11AjG8X3gzpt7KEarA6L7JQDv1spXAaqusosynnJCky5LwTb9bTC1fsYSFYZm",
  "key23": "5qAH2b59A3ctCHx4ws26rW8m4zxPkfMBJAFLfw5JAqzxeUNgyxrALbgYXrxC88uWtpkVwQskdckWDkg7JE9U967k",
  "key24": "4S9eEhhpNGiLgoiHaPkuKdEQEXFW7qvfhEKJdXQQ4f9FEkhYEGUWrmuNw7sRwJunb9ryEFizLfvR2wdK9dWqXc7t",
  "key25": "5Fe1d9QZrbTurmmNZTiHpe6Rkpyq8vkMJbFKuBiuByjguwyFt8EFoKYEDgPsmH6TbVJToLR6F2swzCb52bwCaHEi",
  "key26": "3ij5suQb158cx3uNKdMru9mB45FPpe81GHY7epy38urqyN4HMqEgwSUA139HdgNaVruXM89phNytnJMuC4pzGpxY",
  "key27": "XCuBEgPAfWaF5j9spkjacD9F5pKYPHUsFEngahKL6KCyHDiBAPv4k3VRrNPw6m2Cix9myM4Gw29QcTARM4wUpY5",
  "key28": "5ykdeh7Pv2PZe1WbPJB6uq7SeMUbPWAGuASjCCoEeUuRqpMeTxBFoN31CZoa1bHHAsZZXpBMp37Q2hFuwgyExUjX",
  "key29": "3MGZk2mXXeEYvMYQC8dgNrsVeLEj4RbLvvaZBgKVG8vy4Qx1fGA4j9jQdTLRMaca5yG26kwfBa8huhHBEpETNeW5",
  "key30": "347WaEd4wj5RgyHH6vfJeWJE2qq8eUDsXEN9aqG827iHDBwdLVDurbFFS1yc5JdEkhDpxyu5JfKLLRSAfALqhWuW",
  "key31": "4ZiDEmsB45bpniTS9WJqn8JxSBYRBDy1dVW97cD5VaiSAgEpt5met2dxyvysW4iMGhfwKM5qQ4jGFMfHnAhMqaSR",
  "key32": "Mg7TR8AAigBSWki339WD1v9kehnusfu65sc8SjTTru257WjAaAT1M4oKgd19eDPaj2wCphKE9qrrDX1CjZq3T8x",
  "key33": "5ovvGuTPKBNNS4rpGtv5RvRyGKzCjWQiPD8YjzenyWmYYdDo25XmUMwfi9bpZTWntsEZmXKnLTauUaZr9oWmaY1M",
  "key34": "3jHbvoLKJN9xwoK7gQCfTGUrkJJLz7KtLCLEy93kTRwbZAvGhnrS1xDbVVUBGLRHs1sgcoPaq4A4mTnCcEkp8Qiz",
  "key35": "3QN9LmQv5iMAEosmnYSJ3rqvaE8b2PExTT4RU446kMJ9aBj8BDkV5Rs5muh3egEQey9GoZ9cjPnTyDA26Czi7Wr5",
  "key36": "3m8mM3q4731G68Sx4iWGEVzZ3g1WZ48BgdW59a8C8uv6xhc5X5b9obw3nMASYmreeq3Q2jRiBTKW139NU5whMKSa",
  "key37": "55E22xd6fcEHtXwnNQhgbLo1GLH2U7mZzwbYeAkNv2kKMVza5z97PTtixTFpEefMNQLu17Rs4X78H1z5SAr492XN",
  "key38": "cpdZDrdbqp2Mmk3rAq9T2ykBuSyi5J8BdpnZtZERi4UfNaNNaZjqk9jirpZJZvnooUozF3tqyY8xAHBVMnv4hYD",
  "key39": "5cM1ghRCzx8Gs8aokEb54P34wd1zgph4sAR7S9HHThRGw45Uc3kaTyEWGKPewa6D33ZcxMS627oTJCZnYWFK4dAJ",
  "key40": "5xr5F3794MYJqK1uuBVgesNTMiT3mdSVChLwP5uGEVTAoHdyVb3cFAHb9dikMAzF9suzHhY5eeMDNacXDQ1SihRH",
  "key41": "3fpAZhzyMDzoaovqVk1f76nrRcmW1SseZW2MpAWpjtQ9gVFcjhL8a1njin9He3icRa5vqQikP6eVpuMoA2KVmm8h",
  "key42": "2qcmAcGizoJpJZUepU2oHDTEv1do9dwCxbYzMtFVMJNCxXP4e1cgg62F4d3zsdy2aceTWrgXz7VXCckACFpmroe8",
  "key43": "3u2F9PYHJeuEZPWPYyscR75koHsbVr6jz3MmEXCuuPcSffbctcnEedF55E6Cm8q6xLRxbGAUCFtxXU15s2S6xgZe",
  "key44": "5zonX2gvYe7tQPY7X8q5Wn5Vob6EH1oeysmgTekzgTACGp1aHG84AWb3qcXTL8DT6ipevfBzZt7q5v4KRyphe7zt",
  "key45": "5AsGvxEmCHrpKWmssfYvmECpYfhrg5AYhH64Zn3S16PZSYqoVC6trwHyBuufc5MgQNag2uBgUNSnV3MK7b5LvHCw",
  "key46": "5MWc3UDAhU8dwSccRrsYUvM7zAPwWcHqBqNpiFBBLmcPPSmcMouBt1BVG9WaEA6sWptKziw9mRu6bsaEfaRxVK6o",
  "key47": "3wEGqJ9RNyCaxn4F8ho6TWCCKz8kuXbxBj5sYe3azbufKg4EfbuF7o2KyyxjjpZ1rpcaNo5QUkRpZXGweNcGi6pb",
  "key48": "4vNe7N3MZMuXkVQPwJsi1SrxvFsHSsJYAqa5zKNBcomTfDhfGPJiGYBmzTbRb6xoAopgsVMRH63ZjuCs45MMHZSZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
