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
    "4mT5BPmSxgkhiDUrKP2STBogcZBNtjy22UP9WJSpbcQENVBM4L8XXXn1H5WAaAtLwEqgmvoWvUGrJKQCMypCqBjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggWxwPss8jguyecciNH9E7fQFMAYa9uSCT4tJJ5mFMb7sXPfN9VRkRSZpNKjQZmygSBKyyLdPfisRrz8pyGTVSi",
  "key1": "hYEaqQjeepkXJtU7QySRE54TPq4ddrcEZjcshzvQkcjEzwmXk836UkNvVqxiKYZWKfvWhY69G87SffZoaK9f86r",
  "key2": "2irAWbU82SEP65LbsdS5fWtxUVV2zuHGXo3G4mxzmyRvfnmiMfmHPCV4xjEotKo7kqypC1QjiUjpYmPYkb5AbfwV",
  "key3": "VFSx4LQ92YReae6SL1sd5yy347BFVocHFrbzfMoQoJfLiF1QfbU6NSEeCubsZJhsCvNMwSrjRVgyYHWhk2gPj2U",
  "key4": "5fqdtzpbKr63uxm5LCoW5gfvXiP4Y8HuUY6CZri5oDbzGf6t9TuiB8HBrr3MUcJJWkEWhieVPeXxvft6ieTdwUG3",
  "key5": "67DquX8CQPxUm6WN9f1sT2iPhvELdaL9tBrpWSwqrUNed4z5dXBryhELjnpj4RLSjDD8WfmLfD7ZERb8udnEjtQj",
  "key6": "3RU7B3mf2NPCsmKBpUnDavsKz64CLncgzCn6xiwJzPBazTwyQGVnLADpmsJFjcLJ6P7BMNPJKg5jKrbAe3aXxFdJ",
  "key7": "U33x1qunx1BU5J1cmVxZLjFynTbTqUB8NZnmQLqEmtBKvMPXTjeRXBWrR5acjcCUtZC2fLf9eWtzTLJddUZVHNX",
  "key8": "5QmvmQW1KxoEsoigCYk4gMTnguoiZSdK3H4XSEBHQRghLNpzxvmsVuRYqNkNxmUfNADCVxVio2zuF45K1de8nQNa",
  "key9": "4JFyGmNBXvDEYgrCcRS4Y1wduZ93VKA4Da51tNrFhSo8pns7D7yKidAXBqoi6gDbJmJHa6rskb3RPBLJnbzkeoQy",
  "key10": "RzeytNsisJx26JQNJW6QZT8zqBAxXLx7hkbKzmYa21AWTZJ1ZBs63XnR6h8sdHECwwXRrHLU6fUidUy7wGE3CEF",
  "key11": "3cERUvuXGZ7V7v8dW6Q2hDG5rXsBS9fibHjfgXSCzdwEPQoqcbg89ATm9Txi1DkBBwT8x4PkfNoNtizHsSw98UF1",
  "key12": "2BUbGRaGb9n5QvBcLe1cTA4k2pkR3H2Xfz4VkRyceo1bofptTWzyGAUzJuGUYREZ3L9zFabo3U7cbn7FtexBrJPM",
  "key13": "5EaA2j5aGStdJC3fJLFuEhTmsqxh3ArZGejSPTLQ82p4kbpy26QWSE5d6jJ75QzMuwqPyfYJnwBPEPijPeF5pFPG",
  "key14": "5uxuPd5tZSiNJ4R79gbrDbNpdcwfQzV56RFPMwLMK2LrDZ946BVikRZqkb3SCMD72W9uW56m2BM45NcqL7598ohd",
  "key15": "2R1ddQjHCYHdQN2pa7khS5UdystF1pGAAzE8jbQTBd8DLKrCqsE9HgdsFcn4TVBQ6F1XGyZEDXdgyoBway5PPJuh",
  "key16": "4fy5knjfvU9nxMNdi1i6DqGjMLgZvJgTudVAqh3jsXmnLw9ZLgL8vaoShQw1bUL3rBhdwoKvi7e2tpKD39hia6Tu",
  "key17": "3aimjvPyvEwQmwiAfrQSUoNwNhy3ofsCRpX2NFqT7o4vF2LwZZxVvnDfTnvfKJQScK6DmYH55Lz9FdEx8TNW6dy5",
  "key18": "d1wKDUnvCGdhaBoezuXeFXmMBb37KKCGRyH6NuW9k6yQVPNPbTJ2crorjFxBTZvaukVS1GPMBcd5aHnbbGRzxF7",
  "key19": "4E19RVJubTYdjRxYCvik7wQNAWx1xg8BQQZ3KDX5GcFmsiZNAXWqcSuFCUMcynHsc6Cv1kRF96enBSKPVm52TtUM",
  "key20": "2nEurg1VCrxzHfivpmHG4qjWCZi2m5Fp2vVzDL3BfJJykrbWWo3eYsWWUNVk1tXXFxkRBZPE4sTSRoYQSc7R7DTn",
  "key21": "QfbhwezExMkRvs6pDzhADHxegTetVbuWizpbi3zwLhDfpFc2YGyD4cPX8M4Eee5aVqfn8hCQT3LKeYvHt2ptmL2",
  "key22": "3ywBWnf2C6ksNHc55CU9RqE56GTvqTu5vsN8nRWfaFdCLsjjJV4StLgPv7TEdraachBHRYAwEo9soiz3W7pjUzZn",
  "key23": "4RPd3Wa1Gt7uL5C3pHTMUHB8g417LHhBYKzmtsLudGwXafSh6ZUsyVQM1KmowRB6R7r2q4j6Hz7J6yhjssrR212J",
  "key24": "5Cg7J8aKUaZex6GayGPqGSnzhWGXAGM5WXheGXbMryNff8756CQdX3n4kZxmAKUCrUcVxsh1DjnkoV3QhJ9Bt5LV",
  "key25": "4vbqeN8q9F9chsQgbctRLHQAZU8uTLJkSNt2UUaH6swJAdZerS2HqN7JhNsfH58kW9KBBpeC6r6FyqP22zDntYpg",
  "key26": "2ydsrZca4bQ6rCXWyVadcXFoHY5b2oA5CcqiHVyBfcZFqbVxhg7CKth8sZpS3xhUAqabbs6VevddjtsCm5mi7HXj",
  "key27": "TSuhHojZaN9K228Fy6z5pnsGWSHLC7HHDJbMayPDYjw4B3hCaUXBECN6Lj8kR97GJN7za2mZPHBpCPmzULxGkvZ",
  "key28": "2PEGZxar1hh5NSEt1k1oc9hNqp5veaD9xEEGxu7PHjJBF9Jmpmmd3EaHna7UDGRCAzzAFY17JA6Pg6a1B8SjpSo2",
  "key29": "3S3a7qu5JTwG7jfpNWFQPXi5147a2qXApGKFPkZPV73P4pP3Za1mphEKzVZX3TCMZyVFSVfZeoAXL4ry467s1p9y",
  "key30": "xZCbmKA2LwpEtRw8od3eyRP4Nd84UZLbKBKCDsGNMpjeHqd4WTEA4ZLDz33MexWwLcSVrZBANrmKnqwZXmqaZLU",
  "key31": "2671vQr15j4uNkQacRb2AZAB44kfRHhtK6E6iNBr8Bmt3VkbQvokC2dj4L22zuBj6q4Mx5SekQAJ3ZgP7q6KMfCu",
  "key32": "3LVjHLtA57FmwKPXUYyZVfyPA92oZdb2dXWfPUJC4fmFAxFCFTaNGHYknLgLEQWJUzcRsD9vXAigT4xot6wGSMDc",
  "key33": "23ecD5TfHy7iu6bimvaqzg1Amxe3DPGcojP4j4JPteZsH5nygFMiz1FvezVYkr27NCqWHg7trVyhpW3WPgHr7TRc",
  "key34": "4sdYFDgVK348SMcuNyTULc8umPeeCgAddqdw89H9E9nTeeznfMqeJbfER7cGxAmjkvn6STmJ4YpRjKWgeHXZT8pE",
  "key35": "38cjfAp9nqyyrXMMqTgrJz1Hf5BrRqEqE6xjvfoy9PzQBQk7yphbD3vRqGccwtPnFBMjvpptpKSGrUFKEU3UCrsh",
  "key36": "3nRUSvkSg4LeqcMZ6LoJrdwuuwvTR15up2YvDQ7H74XTDo7JpJFT6SW9MYa48i9WKijTC438wJkHz83Su42s1Mfp",
  "key37": "43HhUgWtbxGyiMVhd2oDoGyoFz41KNSJqnYxE5Gxfn2c7T2NQBvkt4morhPKvQUNV16R4vJ1FcNA7C5TQ2NyRMnw",
  "key38": "2VoSx8Rn122ZEY1u6VANoPtwRCCQZykYvjedFiBtoG3sWRWCKhb9ckmp4Md3Px3E4KVAZgtwY7yZtXNF1GS6qReX",
  "key39": "qtuVVwnEpaNjoip7Kq33mo27Q81PyvDa9yJi38TdyxPdhaWqsMfiEYtsG8zsNWad1idJs1gLcXvyWBNgQdvyYTx",
  "key40": "5t6AqXCU27zkzMCafJvWV2xgaZxfjYEqHRHNkVMUFTKbTFNmdp2rv35DqYD7UBjMEo1bRCRPCX9W5WedtHqc42Eh",
  "key41": "4FHs4gLoBUMJGgRQ1M8qpb923x3AypomwrYgDhYvYEkbEbyzMxbLxtcCRvfQSS4ZMvCbPK9EWUoHNsRnxJF4ZD5m",
  "key42": "4ZRLYWFemQfDxHNYhzMcNzSFWW9Mbkxjdi7X9oWeWUChpxQAzEhP1E6uJ6T5yAaHLFDWAS2U9d6d6U78Ja2CRBxx",
  "key43": "6jipWc55cHyy8y39K7rLMLsFUhWVjn59zAaR5UoY2G27ZH85YEVi1qUxWqDg2kWttpwdDTZ4dJN2dT8AoE8eT4m",
  "key44": "4GcyrHGVXRZc7gF1NTKuGRD4HMPTbEYkn5aPW8fRSLx531k9HFGPJ5iryZoKocrsn7qw7R9RsZp7m1QuVLKM6xhA",
  "key45": "349Aq4fJRcmttGe4Bc1pQQazvfh3Eg43YFHGV7Vzgw7N7XqWA7AvvVsm9iVrkTjrJi1UVt36kXAQeex6TmJv75gs",
  "key46": "4ceJGYAVUjktZPcztNhBL96xmh8A6FAYFX1iCMCzjJrc8v9eaB1yHL4jtT3bzmWkQ5dRC62jDky6DFMDtb7jef43"
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
