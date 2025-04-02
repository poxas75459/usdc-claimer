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
    "2Ss5mR1VENSG1A4aJcpbLSWPUVejf6kfteSef75jaD3cYCxo4TUsoBcWbaYMRepHWWvtEyq96s3H83i8Z59zaYCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPr9U2EfesL44uBNGcVXz2d72u5y7CQZPmEfMiXxStcfD9u7rhNfL32BS3gA49iHyBi7oNzcfQV4bUvcMwe4cNA",
  "key1": "AzJtdJaxBvhZKMEyN6DERchLi4FjNX3EWjQ2Et8ZtStLVkBt8aU3x5AUG1uSuAtHQomxZzNVHhQCf6cmAKHiL2d",
  "key2": "5d6GsxbiRm9FA5PFePgv2rkatK9LW1gvBDQdENFBjMP38897xrUgZERtvDRBRFRY9NMzXkQ7jHfuei2h1GLddVtJ",
  "key3": "23mk7DhyxEeeRAscdRkKLo8KHJFht4i9JjvGHBmm99PYcaso1x4nw2DvMosp8bMYNF4grMCT1bfJC4oLjyWenXN5",
  "key4": "37NZcnLqjiCFCkSU2SiJG2bYpFbp8549Z6oN6rrcxoUc1TWXmuPAUatBncjAmf5xRr3DEvDQsVtjCECpp3Uf5SGL",
  "key5": "ujXok6QbFPNcsDbN5STyzxNaEYZVaW3MPkWaqSvpEerXPaocu2tevGntnPd9dhdJeFFaGYHZTECa5PyeQ22cfh1",
  "key6": "4VKQ7DWAG2e348G4RC9cTujEpoZkBJQfDNd4v2VBWv4aW62WHBg5F2uNhWmWdRtNq2Fo8QbdxiAs58d1kSTEJYxo",
  "key7": "2hc6299DJCDX2noW7vWJmdXNUi5SXgHwhmoSjLoPULpWbubFjzFjvQhRqg3ejAPZ9Tvewk4pEH8LDDMkxNECJD3U",
  "key8": "3AeucHD4QKaohf3W9ZTYUPsHWiRfuz26vMK3DjLnPiJiY7FDqrS2vZgct5P3j3AVi8cfJfAjMZtXZQ96aimy6fVh",
  "key9": "3LdEQmKBPxPwVPg85mVraB87HHVR3R1axRrrhvDvcNkZ9JuEPq4YNQWC3VUFfxxHB7nctectP4cp2PQZiuwAJErF",
  "key10": "rT5iGiYpbRy4rgaqG5jkvCR6QYZPDnceFBAu1igAZB4ckJcM7MpPWMnNQHwXVYHpQgDgyeQmvnYFpziXZAj5uFi",
  "key11": "2MsHKh8icLrdHyiVR2PxdyrroJNfqtKiAN64WHRcpFDNCRyLBB7sCVRJdet5dRo9ELVpmNVxGQx4xmp6FD63BpG4",
  "key12": "5BFLEWWU5cMkmGkkKrEkdXByLrZ3r2FZyx11u4ywUhg6Xqr8ERyg8qvqn6kBZ7APNk5skUS119DnmFtNHm1MLojL",
  "key13": "QGy1qD2gUB9GYUJ2e8GjoNtYJUaPE8niaxDpynQbwhgHtL9M5GxbEADh1Vr29rbHpBJCkBKepL6wKVs7kHx5d5t",
  "key14": "5yFuyY5Zkn3hS4iJ5aVpKpSx2bXsEnECVbuZLDHe1y1GKnNkkoYKW7rfArXrdArp5bbPvc9EvEFGtNQmegfmEKXf",
  "key15": "2A1WdJqC6dQ2BoPghSZBY4p8vGfz674QerXgCfdRpnxHHfPf9WYWtmUHaQ7cg88yKo7owatU1gozjwwZgszZgbt2",
  "key16": "XPSt1fhXJc8qGSM3RgdH9Jba78mo5KBjPqFbSgbh2s2XYXyCeRGVF9TBbYBb5GTwxMraeamMry6pLWVVFoPfKZz",
  "key17": "3qz6zz2rG5wqAm45kNphad1Q9bR65Ut6zzCnSx6FxQGQf1yBT9KweLXeChEcoe5CFFfuQWgN5rVjsZcrbmhZzdwt",
  "key18": "41F4nvfkJMShcgncdcQ8FJ5e2VbqaWtQDNHErLA8jc5a1pukpUmMndadNfTTqmSVjNJFVAm4WCcoir6gHXwy5ywR",
  "key19": "2PffFpbmvTuvDbvXiKaJtFHhzAZS78hhGpoMJhMNDPwCZerDmPKzreqT4jVKeCTV1Qx8uADBtXvsfdNYT8E4tdNG",
  "key20": "5hquZS5kTEpDQPKgX56xu3T4VfyaqsNoNmAYawQSrWqFAmwojDL9MeAsMZeJCxtZFatfS1K3JWrtP12g5ghyhP7Q",
  "key21": "5jeoaaTGUiJbnbQknArEYme7cZ79r5awwYFwLND3FBbiwdLeWQkVLBHfe6C3KKWG2R3nhzZ8JckuNGLi9PiMpYK3",
  "key22": "ZGjQaFRa46ukqZXpy87Fg9rCcgdCfh6q2infgbYiHdAg5NeVjyfFYvrxXXBPDpxsxCd6gZcn5FAR15zAaSicDx6",
  "key23": "TDrLnKG6rf8tdNu6Mz2GjHHLjynAVMy7Usp5CXYzrjs4e1d7N3JRc9oJMtwEHRbELubb5DtRPyZzx6eXdDe3ePp",
  "key24": "w6KNiaw7ceH2TGjvWmcXmqrGPBxDVmMBqvMd88rnkUfwWMifC1gvq8rS8csdNhZTWfLabTRN6XjoQhTwLq1De7B",
  "key25": "3qc1NPQbmpacFQATFJmhDo534KUwuPuMu9j1EcRVgFBrd1fZWMnCNnNj1PFjqRE8DorQtbdKm13H3UdVJSFzEjJJ",
  "key26": "2sXYKFJV4gQms8DJFu6xtjnbJDssK81SNDdnE7kxcgzT41TyzZsXors4tUUwMfgWM2vWH6oPR4rN981BDQ9rGV7F",
  "key27": "5iFDMFVYUGDrcEsfXBj7pAYEex2SSPMj8e2g3yvo4PYJiUoenB6W1jZktPqy5ehVbXACtsw1Lm3WaeEWf6Jh1wXG",
  "key28": "3maik3o51cPjiE4XVHni1qAZPvM8XYJGuNtiRrTpp9pGqc3iWMCzryxC1Ui8Mshdr2tKD48DB8dFnu9kW32qxJk9",
  "key29": "2EL59m1K2ejMf3o2g6tAnsdUCJUxmM6zgYonkcUX3PXt1wyPnC9ahr3CHM3nwkdfvxiKVy5Hk76pToxzKuhXW66h",
  "key30": "25FLHdzKGBoqRyWguLLyKvFhQbhcaPpV1NYWGemXCeBBfLuXWoTFnSGGRi2gtdHcZekRaVCqRvW5auSWw1QnDtr6",
  "key31": "7Q2vnmG11SxAN8wFZ3EtQdPu13UNwzKXrgEujXshYZHu8aUz5M4oTdazdNX8SfpHo5UeFMqXnPRKWavqhUoESSu",
  "key32": "5SfVnsjEiCBTF49DQaZ539As8WtuFwqYywFe9cktLfMZgX73h2ULfvk44xEsCiYsnoYdowPdWTbkmsJxk7A8bU1B",
  "key33": "2yUiFqCecSZxi2AqZsRCr84rz4wM4sGTVhQdHyfndb3K1ceYWy3Fbz1dJv3twSwJqXNJgqgCy3mFAm5zf53LM9wi",
  "key34": "hz6i6o73amLHRJEo4NcxMe7hXVDrxXL5NQAi2u9a4ytoZEdbhkYE1irouSVStsq52RamGKhmPYsr3JdZN1dhiRv",
  "key35": "3s9RTVHe2mZigv9nXpMqERkmdWB1MMu9P5PvALit3fi6fgm23wvGJS8xdE38xwPoSaf7PtcdFQ6L8ZihEnpxnwmt",
  "key36": "3mLxvSacbjCzTSwomGsbjXbYckMBpccx6m7BymBWUZArwnXzwA5T59aHtuJaRCQQWJBwS6nY83etqm1fKKDBp8GP",
  "key37": "2UcxkvCKfJBE2p8ppQcHKvcSGPDYBoRvPfB5cD2agNqxDFgQqbDAPCqYL9eARPLUobnFabEydzMfJQ6ER2uhhMCn",
  "key38": "2E1SqdPrsapgznjoLbk48Q2YBngCXZKrdSkTHuYkrdnRn9F5MM6JRyD5z9WHpgmuQEamiDRYUtkWGWZwc59eXAdi",
  "key39": "2ZjwTt1VRETsqhNgdpuDsfSUpntKZPj8xSKmQmTFYocffTzgogpfdgGivZXRXWWuSLraFUgxGjzWGJB5A9TPr1tE",
  "key40": "4pMxcyZfJ9vE8U8HeqC3J42bC7KAttYwVxD3NvescaxvYhnPaY4uQyYD599k4g6KQYfmthxqroUCFD9fparW7nKE",
  "key41": "3drMBLXLh7BxZ5XFuHvV1NBoWYzPQHqSktgKtpbVb92tvi1BrvFxUSyvBt1t8e1BfwWCPthTLAFkmp1BRRpD9hsb",
  "key42": "4t5TtaaH3tZyz3W2Xb8ypzHhLewYT8KSwUSurtYihcbSPfcw9YKKu8i69LMF8PS7BDTM3SYavoQsTYUfKR3eJVsh"
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
