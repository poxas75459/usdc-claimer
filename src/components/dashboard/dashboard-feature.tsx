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
    "3X8rDvFih7mZP9fthb7v9JjKwzhZng27Hsvow2s51P2ykx3FFYwkvFb7FbvFHN7YpmQcknUsNtsqEHP1GFRMQ3Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XgzmeqYpwybTEcgD9P89ug64LkU7qXMzeLUMkhTdLXjatoru8bFPDPQN3KZ2c2cofMEaz7uCZAcZxdk8YS4fjJM",
  "key1": "66Ta25u6p28e5FFNBny8DqqCYzcGXBP66fCD5ocp8sMWEcUmoRsg3LhSz4ctYLb1SKT4ftke4mZQsemCRg9ULRxc",
  "key2": "2E8mgkv1DZKG3wKR9ZwsoUFCS6C3rbjB4FuxS7PrKbxGHYGaQ9g9H3mHBpn5sjJj783yvW7fPhQ7bUZWg8dYkLc",
  "key3": "5eHgfqny3GT5CiLKhERcF1CV2T5AUD89iG2ravxGPRTwEZ7AfoAJE44H7oQcxzxinGCzNgerd6EkvBMYDS73RkvL",
  "key4": "2BGGmSJVBMhwbJDEaqfmkZPZaJDjgfvZZTQNG4Hueyp7aA9BHQydMxcD1evQ4zrpuD4PKTzyn6frNyptSQWa6NWG",
  "key5": "45vYbx1PzzoFimosoGkRxZbEQJeGWRfKYqrWfojfbakEq3sS1iuXgyWEEetRs4XLiR1U5VubsTqguvB39NahPBWN",
  "key6": "4XT1iEhmWtfQguLt5f2DmgKatnC8YsNQhz2sFFPhG4wjTfEZAPAh7hF3TebeP91DyM6aaQM2EDfVBUR6rJK3AQoW",
  "key7": "4dymmzxVTW6RBbQGTJ7Rs1YwwkYH6bdvtGq5VAiFjtahAEEow5xpwLLkPJSkV7pEYtxUCiAeLs4afoPWzAWqS4pz",
  "key8": "36Sz6CB6PRNnfudaxQMSMkAoejPBajtXF3srBhTtBryDqrmAowjAQsitmFS6MmPvZCjauH4ueAH264gn9HjaVLGP",
  "key9": "cFG58SQaurECHk7VfUXxis1WJE2Cn9FxQ3e5D6mtMrVvZJUKtz4kQhF8Xe4xbRJn9HagnHY1UFqwe5dNH2ZK9Rg",
  "key10": "7VeAx6TyxLBuAbpTiEXp1Pbb3BKcrstGycjwbwXN3FnY6jWpLJJYP5LNqYo5AFfTnbZ5yHxVTZxyi4e2mHYwhP2",
  "key11": "oWPoowgV77o4D48zjGN8f6MeeTXDbaAoKbcJ2Fmb9w1dfczWMrrdEB7qhKwBNvjXyNyPycdST2WC3TSJUZig8ac",
  "key12": "2L3TooqroNx8JTd8sktfZv5zT4xEY22Hp3qCrrZPaqusnVQUb3hw2sF3KHPgjJ4d9J9BVt1K9KRfVuAR15ebi8ho",
  "key13": "5HvtLdipqwGwshnmRyeri9a5o1Csdr3DUKg7qHZYrAo2s43crDs5ohwZxwEGjDuSHiRBFe1Ms6THeyGEyPLEEjp3",
  "key14": "NmYDi8N2ExeDzVcXuJ234SLkX4gSTzuePG6LaHEseQ8Mgp1R3ZxfqJwUepCNzsSB9wPGZgikw42ya5eTGmx7LzE",
  "key15": "fHLArgsQQ2YAdxAMgvft2515wraRDdHYsdLeh45D2EmreGJxmHrDErzN8GS41ZsAMu9Jchh5yFeozqpd9etySkr",
  "key16": "2oAoWk6oEeXrHvg4uaPhkQzdz9J5NQWMmqsguerAGxrfCifa4yMoJpcCtt3vXk2FPiuXizFJC2WeMnG4W7ACRoCZ",
  "key17": "56QfYAERkrtWU6arvBu6UWhHTSCjb6pu57N3drHQL6Zx7j8cTtFcqDJK3aLM9AUoGi3wJkhMGuAGkNVML7p31iry",
  "key18": "3AJqp3eMPNDtUVW3oy84LFH1jpNrcYN3FDqzkt5fgRjm2eWhQSkDiLyMZsmxv6XpgthkFxLAfxYpaoGPauGxSQak",
  "key19": "3bnvSCYUUboc8bLQ29dNtucpxZYjCujPPtgcRx6u64WWpd5Tg3U7BeYY3goSWq7pNURdKd3UmpBDZ3YNNDKNryt3",
  "key20": "2CHS3r5xwE5d2FxwQdLi62YRZNUGLsZBqstUvyvg851mhqaq2vrMRQM1Q3X65CME3E7m73aYWZjS1rvcXM6GSmib",
  "key21": "3f3N8dJwXhXdD42abjqsGKkoxcwLngr3d7J7oVV85VMC7nJpsNk7RmTNfXnRMmKhEMrnrAXchHyakQ2uDvPsHVdu",
  "key22": "5TY7R2BhExVjHEDV1NyGXetzzaWFRNjf7KpqMpuKW2UkrHGMzuss9yEWgb2TfhgctpxGU5XsFqgchczHHaMJzdcU",
  "key23": "3jZ1PXj6FqHLihGp3DVZHMSW3ofxjypCza3Notk16XhURPRPnt9FaWcjooBBprYMmX71Uy2ZCENJ4JjijRx6FpC1",
  "key24": "29y2krXS2DVNi9drxaTGqX7J2uCNWvM998kzLtqjM57A359oBwpq99LHkmXkAGnhXNkrsLCqiunU3GLTUgXsu44o",
  "key25": "4YXm1kNT6Q2Zw2CQX53ee31Q46nL1SgSoxbaZDLjSswKFWnLKM1rEBZX4imAVA6oJTVR2r6PUufG3RT2PmRgvCZ",
  "key26": "3HwPhKSVABZCVWhNAY4by8h6LsAWHePwo6zjSfAqE98Z4wKLuHeRRQckryeDdeoVef4wsfAHVDPAPLqYzazcDpK5",
  "key27": "2j6dQd1gyZiAEP1YwfMvnNMHfg7PpUjeXBbRvVoYwckoVmpUg957CNnmvPoGR8DfsveoSk1SFEvv4tz7Cz4EgM4h",
  "key28": "vn8dXp3qisxLSM5DYJ1C7DevPpNfLoS2QgFbUbQyxcW59n6bqpYvEQYvdykoBcfeRMhcYRmY5fBhhpUnqEM9XDR",
  "key29": "2MUGQMoTgzjYyF8WyYu9mDxWJLiFwT2eUggCk8GLANC8jswRHm9iA8k8csKorvcabaUEwdb41oC1ZdHoRPAcxwff",
  "key30": "2pocDXSUW4cPX6g2FRPHXGeB4jxrRsLW3WRFo8UZidu7RzDxqrvNJUECqbpVsd25M67tJCCTjMFWSCmHn2YpK6Xm",
  "key31": "4rbTxKV5XP5Yek16gULx4Fxrxm5YhFRsn2KduWdGLt71r1AEDG7k8rttadbGx9ofgRVDgaZuDE1RXSNQVFi8b4B",
  "key32": "4fVCbsZMP3ZCWTBiciP7V3sybn3TtCn1HovfrLRmoKREVLirbpFyTi6DohXHNXLR6xrZKETFJua1SoNGeGeqx9w8",
  "key33": "5ktREseP23eYzhn3nCcn9gjq53Za3d5gQMaHepx2gxr7yVnHyVgsAJViGb7y7wo8597G7oZJ76tzjzsBxg4TT4bv",
  "key34": "59Tkx8QvQSgQEE3ohyDTkMgZYECFoPAqu7jEozyaozfsmrALwvibQCa2eaokmamUZcgw4DG5jt3niEmib27vdT3d",
  "key35": "5xHxUSiZS1LPTwhAekfg6KwHeeqGoEbHZsca8LwQJAQ8V1koeezZq4BFE3owzfiYDuST2ufJXNbHy8MKSncusiH",
  "key36": "3FmFZbFkv83yWRGPQL45gQh5nLYvweQyibX58vKuSc95bH6ppPrKnRcuBvHjsZs1F5EPaukw2vfHT3bD4f1YdHhD",
  "key37": "2o8YNtt2WcmmhQMmHpPYAoLnkLfqwFmFRPa7rPF2HkPTbgFg2Hxw6PFJA7tSDtfrEmRNEVMxiUupc19KFrpas8rF",
  "key38": "4grT4tsEVYSURtZj6S7QLUikETQfqurWspueDPXAV9NVfVVK6Q9FYvGoAVXVERCMzv7eNhQQopTgLsZytj5RoeEG",
  "key39": "4cGxfSaqNyuxCb9C44pVJeo92yzmPsqVASRd1MMo7fpBmZh66zYuvUYAavroEjGEaYXCw6zxK3hjHReNwmJkMiqV",
  "key40": "4JeyZ3yK48B5d24fVGKFLM4qCcvbBSkFDmiPtvZ2JdyTc8SBTkDRDaqSxja7B2z4D5LSHKPPcRxwaAmXpC2899Be"
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
