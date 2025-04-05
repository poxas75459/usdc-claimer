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
    "2V9i9hHHQHSn27dtiWX46UKfQk3C8AwTYo4tKMimwni2NcsXtZCv2NrsMkVir89X6Z3mVtqsuJC3PCt8ahNcBLmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HoPCnGjRxKuc94XoFbuGMhx4du2hkEcb3UrmkUz9C3enT51adZf4QE1Rb5r9CkSK5MBZbFbvuRoCh8iSLVJmqDZ",
  "key1": "2zB4oGseswceEbWRi7vyaWS6opVCUD4QaXghNnGvRPGxtmaWBR243JUJdzN2V2xv122fam37vAFKpXbGMr4G6ChN",
  "key2": "3RBHqAbei7RbiRmQcsLZC8HT1kucXvDar9p6ifD2nXfRwzSdSiPn6mRLSiFM4X3bAN1RXT4N2svSh5RXS9pW1Uto",
  "key3": "2JoLowZKWGDYaybXpjz7oVob2bF6gKAZf984RYa2HPsMAy1UkxTy1z5xWPtigLb81ZFvxxCAQb2YgjDdXHn4GKF",
  "key4": "4KGEYf7GeWftsch1zAPmZvRZmkNHkpKX9tmyfeSx5TwpthBeN1kE2iP25861SHtAbZv3dahvWZ2XeXJQbJJgLGEZ",
  "key5": "3ATMjo6C2LzeaKoNU1XyZuYtbHPoZwJw6tEPCmDPNrzMNEcFSt31amMAwSK2Ns9xq13JstY57ZJxTTKWvbjHGDnp",
  "key6": "2L1cr3xE3mGDDDSyBxigjTjKtUoThbqnFxojxozLNfCCwLabDXGc1ns6Yd692MwXHVrWoVG2CKha6euQyKUuJ89y",
  "key7": "4DT2kXbWqBoErVFjfcNcu6hVg5rpn7cLtpL3kny5AtHwuXZmZ1dwLyrC8mzd7hmZw5eKWdkQ9WAP9qN3oJb5KeLs",
  "key8": "coHrUYyLbDY8WeaZvrpkGm5EgzNDM3yBx614BLswBFmipofiUVdFEjT4aePNXHm63JnxdaGJcPjriwZuXwxihRo",
  "key9": "bFuYPFeJybV1XtDESFADwathB3UmNCmNHR1zM15yquLASub27NLfnZ5F2vwz3aeyR5mDQNikYBrMKuejpXAKX3B",
  "key10": "PvRNbggV9hHKuhsxLrAPx5s9Z3MVJFFdg4CQozmhaZ17DBLJcrdUHPDji15joCnxJHthtDkQaoMAZbahnef8ZXF",
  "key11": "5AzeyV3De2FDQWJFDKAGx4sZqGsiY2YGYiSiXTddwtuDQGh8SBTihDYhNixFF4ou1s5hnQk1bs9Ch6NA2o5Sk8kY",
  "key12": "2B2NEvTDYfQphhi5x97HervH7fDJ4JEFj61NeDNBkibkxjbdUGxr8A4xnNDXGtut4Lua2aeRbNjnaHjASUBME458",
  "key13": "4o1BD65AxViXfpJhNrv7SsivGYyJjJW9DXZCV3xuFYknSVRbEfE1NUSCQmVYM57uUZbsxgmR3TvqkEu7BhCM3Tyb",
  "key14": "4WpqVRbVWmbhQb5R1PFDWTMhGq3kgUogbToMY4jow8RePQajMCAdZ5XzA4h15PpbfZNuz4RKovyHK9qULTdc5p89",
  "key15": "3gFRuGVJHpipDsp2927LQwwucdwguSe2S24w2kowCENtLGaeruQCbYAeESCrs7yarRQEDghQM5uvYPSJBNdCnCZg",
  "key16": "3Yk2pxFkbVkQv9UzCKPAzYi5SFvjfd9JmxF4wztJ2UUUFCMu6DZd97BPMy5sZNuvapm3MwRUaeJfKMpge7w8ACvX",
  "key17": "52wkiihPWW5wy6XigkqkqBiEeN64H9uokdGiyi1Z19HFZiZmGKNAjqyp5pJyEPKffj3NbwobcXFRuMunSR6cwb69",
  "key18": "424nG4WbwoMLKWHRa1jk7tfw6b7L5dYUSPb4P7PtEnAMhz8595Zo1Aw2pzJuPnh6nH5zcvsKLFL1SpB4ThDjDiqR",
  "key19": "4satouJMHQwbnBdzrXfoWEzwp4WbMwwGwi27YwFpx36KNKw8jRf6Eaz3bbkFAW5mwfB3VrayBWn8m4qfyCydJeka",
  "key20": "4ZeaJMYkfwd8z25md1u3yG9bpvA84rgpkcejoc2nbT1PsYxXsF6ephkMgscgMAU2TCqTnWM9GMpox39kxDvdNJAZ",
  "key21": "4MNSdd3LPnnGz3b1c4EvsYT9dNsDXRUYesDv5PdsX6HwUrry1bodisXnqy1PohToF2vihX58CRPuY9iRa91fgdpQ",
  "key22": "5yXeBsL2UMcWcRbyRaYcYJNVRuQkWKFfy1aWtRDwCKjJycyXNCDZhjJJso7PMN1xZbVMc6gj9YB1h34ykFKXjjre",
  "key23": "3dVoTBBGTYR8PL1u23CYJHGNC7DPPNMvC6HzNXTuBCodf3u8uC7a8VDmkiGEGFy2Gb12NNzxbGKRWuhYfrB1w57P",
  "key24": "2LtLvQkRn19WFtWK7kusughaiBt6TsTHdR5V5i3sPYigq9EsVUiZXkux9tFP3W1avDweDBb3jXhQXP9TajHSG9KA",
  "key25": "4j2RPikfkopSFbESgWknwuxefLMCzRR2n6MYpshrYmFygPn8wDyUXWu8Zaq7PZBmG99x93VNAKQyac7ybdgfJm3k",
  "key26": "2XdYhtzVRj9sUF3yyC9CgfnEaMJw4Pjz1NckSZHto4BvmXawNHNj8kKF78aW5soKRkmXuLFWZThfCV5WmU3TVscU",
  "key27": "3GN2C36tTvrWYeY9Wh5DgatNN3T7qcjLrngNffYM5ENs7vzbEUDKFWhkQeUyHcpQ8MjDvQYkMcwmv1p7ggXmZvZN"
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
