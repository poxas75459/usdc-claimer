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
    "3K5utBjZDiDnhWvKYhGmyYGRbNdowgaF8wZQhfEPzaY6W9Ttt6nYBj9DakTzfWrgRG7k4HJ9apUNDdQpfiSeEb24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26hZaGxoHjWNbt3RNpewNUu3eFNJYSwFuJCrEeYwAR4kqMb6NQgRR4DWpmHAmHG8JwK15MovdmFujTnziTatiEbN",
  "key1": "3oqZFnRJ4b7aXjnmqGQmVy6wyQYsPbt9BngB8B1s2Kge9wM46VJFPJ1on699j9Pm6EAFpW3htVDWSvkzRAefG1QX",
  "key2": "5EsgvC3b9DCAcFhNwfeghcQyBEnbuhj5kMJxfxVCAYHpQVMsDKyLh6Jp9hH9t1DdNzHKftYYiyV9J1XhU5GKuw3q",
  "key3": "5UhsR6uZiRcff6cj19xmQuJek4XAY9QTSywDeVSm9z1SqqCH4qVaG4PohcgeS1xTCio9KqWjfvHZGrJpXapwxsqA",
  "key4": "5YCrPLmXNiL5x8iPofmpRLzfmoNwHimoezGLHbFpimkW5AB7Kxgm983HYQWi8onrMrsmsesatDvqmKkTS2JHQGKK",
  "key5": "Vm9Gn6ayZwLrSGidvV3jhqaQHWKFtuxojuwsM9kWaD1vSegWJfqCS6y9ZdAuxTCkLu93y2NxB3LsUius1AMfVEe",
  "key6": "2UFiBESdo63eKKGiJJs3wxojo5Ubj6U3yor5sDVMHLshF43yhYJBC3DXuUZNno2CHWfvoN8rCffBocQ3haKpDB14",
  "key7": "4GA1oGLLvLx5eFwRvrmBbwBoLQmeBs3v2rAg6VSaChX76b9Y6t6HdwJiqMAorgxgRg3bbvYUBJapfNUc9f1TxKf6",
  "key8": "4D84NpzGLnLL2GgjKbEt69r82NfSg2HdbEH1oKRazA4KrgkFdxCDafYCfRr6m1LyfYWVz8qv44fzqJ4ohoPuFZUN",
  "key9": "56FDyb1N5tyKom78aTRDDwohhQxRuAp9CKpaieb746vEYCn2mN2S2qnvoC9JYQsiXXB68JeDby9NeVswuTqgZFpo",
  "key10": "23mFWDtVpUthXWZRTzSZq4dwwKmN7GJ6cUydVo5QDj677D8hUuWxbBG3t7QfDF66JU8PFWkQuHyRw6CFY2qXiBcP",
  "key11": "pa22wockNwrcfJDZUzEZLpzwhy5gwFvrWeN8uU2MxMKFMZQY3a7Cz3MawriFpkiaF2wYxoix3f6k7L2GNzpg2Uh",
  "key12": "4RaGbbnRaEr6bnujiyFCEKE3a4y6rZLDtjid6MNF5LxQEP75FT5vGCCrYyi1J8N5dT2dZXHrouX6P1dZerN5mhfJ",
  "key13": "4ioVtzUbtyCT5p9ao5n3xNSahq9S67CDxcmhGLfzCSjV7rp5fwEuGDV522vooVEXoHALPZGddKXAYtbcTURdtU6w",
  "key14": "2U9ZVhBcp6jSZ7MtVtEBje84ruFsa6e9hxBgLWWRwT9sMYvvVfhyGcgX5szrqnXFb1wFAVLzUMRdDxXMrvjNo6aJ",
  "key15": "e4tCJg95TUk8AaHXCJiefQe552yyHkhYEvELb6hFQU6pGaTW4thFRF8zvfTmRNGLFKYC7WJRmzHFVcdWTSzh43u",
  "key16": "2364XmB6StFeV9dhgqY8fUx4tKuuQkSByCSmtgk7nPNAe2WSJfkA39giXe2BDKbTFKWsu7LmpvEjYpogFTZtgyJt",
  "key17": "pKemXMU8tXdfT7ommuJQYQrGUPvqKAMya4idrKoEXkwVpvVEGb5LTYvQXcMoQd5yM4FgvLTMPHpgPRVMQR82CFm",
  "key18": "3AcvaNm1uafkNZ5Bc1bWdLsaLWbBggA7eFAZiVbycgsPtjhSHdgKvsPgvqheLNh1cyUhmpD5wjEsHQa67BEzjg8b",
  "key19": "FLpBrwZR1rU7GudhmGgoGztVnkLxXx7zjrAwSQA6TdWPgmHU3mdT26WEEHQyRUWv4sAPbXMRWKk8JUBP4RMLbwe",
  "key20": "438bNLwATpni1JHqn3HZmrvwtTQ1DmT5FcCYnExCTGJaGKd9xKBiEcmYiiXVxDWBHjz5NFgKCMiuxkt1rsY8KP1Z",
  "key21": "5FnLq5i1iNjc4qYrH2AYwK73YHkr5RKkp5vidxt1dYcXvADiw3kbrzkcva9ZsPPyoZx5sxPTwkfo1iourPe7L8VE",
  "key22": "4uAXXHYFKEUAt8sk2sL7bVS4xcFocJfEgqzdLJxcQ85YSrszM1TTYrciJhmAzS6LEaLfTJ3g14gzbmjPH4oPbPAd",
  "key23": "2AFrLFGa6Noc32QL71WZC7mr6FNxCM9JcujJN3wNj8mwB7JVDcHQvKwxZGZnSfWbuhqBWwdyR2L2su7497e4ePMB",
  "key24": "CChx9i9x6NDC6crEMTpmpJZZadeZq5LPFhnNwLza1WaUCk7bzY1GUFPKoTbHVsM1h961UhVVWAk1bRXSkZdi9Dn",
  "key25": "2Ykmre691HopuAH7e6HSHiTuPWCYfy47n97m8J7UYRnsWUD9BQwqpGyZP8CzCDSq5mhVuLgaVUSTX1fFsxeeLgVn",
  "key26": "4NmTZMA7PQc3B8Vp51vLZgCZMwosZPVW7ZfmQd7XrjW9f5VmsNPuQZCay9iDyyrMmKPE4LWfswGWyvbxuAWECdTK",
  "key27": "2u4Vrw8PiYgTrfaTHcU7ktDub7e2wpC8hQqXJUgZNj5Cpi5TVoQkgqfiyWMMKq62T28r3Dahne2KCziHhwJ47GRA",
  "key28": "3QuFvkwe44S63USsp6ANtXnJg2SnqvonNdZogh6osUnmmojSaLueRnhp4EWcpgHW7vZ2ee4sTJ4ZCLn3kpzJnno8",
  "key29": "41gcGrje1WEKqgabiNDEeNznQsRbETaKDVE38fmKVuyxHpob4yGz7aZey2cEzPbWCwGnJ5vuktZMmcTPuzHiUUy",
  "key30": "481YBHf2jYQcuVgX2s9ng7eB7aU7WJ6ZXt7F6vTaWicnUEpTLfxzJ8CbuHSNxdPZCBehScJ4wPTNCMyHAqvvsDih",
  "key31": "47TkzmytbvaogaVhvVRnzTmB16jYgrKDN5Q7mhMtjGY7jPcJ2XzeqTQ8SsNY8Cx4GyPmTnuMEd16zWDQWQLZNVKu",
  "key32": "64WgufLSyBEcnZrAnDBss9v3GJf264VnaZ24gFmXZ3m6mfs75KaZsTL38QDEsMJcFRFLiMukvZvh2JzTNjfj5DAv",
  "key33": "4U2jp246WHKWMnzgtAQSXMb9qqJqQ8rmZ8DzonDnVmYg4fQojq5hBoiUSKh6aShELZxxoqUA1JujwYmdSEKQ1YGX",
  "key34": "44FrNQH4S21UeFTBX3BNtNsGBb2sceX9b6R83JrPY9xvp2VLdmmGnjc6Gko7wA9Mftn1XMqzvrEXkSGWxRAjeBc8",
  "key35": "2C7MGvXNS4CPNFLCXuDXoX7QfPTCn3x9qhWrTtNx9mYHk4K7A26Dd8ixVQsjbzo5uqNB37nNkMbofvJDL8H9XTmJ",
  "key36": "3Lr3sgV1t3jXUiQuDKPThdBiGqjeH5TxqAmhfqSnjrKw4jbz8AFarR5k4gA5ryXrmTcsYaPf84p198kmMp9KfLNJ",
  "key37": "2vSK2oGSZHbUe4NvxmLUA6WuhBMzUpEzG2DZWzVrbbAs3Vkq2h3T8pBKZ5DP8dX568RSEnkCDcZHHHKV9ZmgCkNQ",
  "key38": "4sc9Yp5p8JbNaxC4rc4xLZzVutzQJNyM8cPjjuYDA4mPVTkNWPew3S6DwrwPWFDKrSLQs7Yuykh1yZSxgSurcsat",
  "key39": "4UGHSVuS3QRRqEzFupuYxKCbFBSHX9PwWqvWSMeuok5Vu9FLspxyf9bKSH2kRzurfWgesuvC2taQoT8hdAoPww6z",
  "key40": "1fc29NegTjzg8ZYvS5oC7e1LP5HRjS52q5ojSoNXLVBjoSJyaY2SqGrggrMeYtDNS5vVtKKWdh5MXRcjxXSRpDM",
  "key41": "2QCfyMZwFhAMiTxRiBqPQPU4ZEsmDbFsM3vNoswWuYaz1bX1jzTMRpKbL6DimwfrQfcJFvyLyPBtfSGqBGVX32bm",
  "key42": "kD5CQK5UGr8DFEiiLozg3oxEQ2oUhH5B7Qegh5mQaLWHDDqLpMFCsVbNNenKZ74nZ6qdJ9VpFypp6zCbJhFaRNT",
  "key43": "5iH8y6zPRbANrZic6LUwzQNyvoS9PhhCDKr3zkXvnQmwwYA1FxNEmhMm9EcGNrYM3pC6CYSEVV7Qd3FiRv2NHYec"
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
