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
    "5U3e77dBGeqXP7d543nYRYX7vpZkfMFa6Yhb3tDW3HYHSyey9DSAU3kUGFerMqiYeeHc1j6P3jXTna5DTwV2U98j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JdGd787pssznTcFusJpjFZ8EQfkER62KCYCUTiMeMHMX43S2JK4AAcHwrsRV2BJEa62cYWdH7pj14GpT2ub2HwY",
  "key1": "4sYLQcsLNxo43btGrHcKHdgMRwddyNxBunza7krtixpMM6KWwgvtCr2tcZ9PsVCLxeVEUXZcXzVkVak9Fb43H16t",
  "key2": "4euJLoieMcpkHVkRgmKiXSmv8bdeNCvehNM2SfnTpPX9gtsxXouTzbbueqKxvxNKHYm2PcSszBH8GhJqyDnzMRJB",
  "key3": "669PAHvsX7DC8JELmF4RhpgPdV5LCqjKi3GSZkNQAV228xDAavdmNMcXbUpuW3ER8n4h2ZjbKQVJ3vtmrYU5p2VX",
  "key4": "VtHj26qYcEQeCoZ5Mk2iLPquLpdtPses2oYLFXbYRHtNYqLgGLZcEuYWWHcFrCVTr2zPFvKDh5ywYCUqxEnZwEr",
  "key5": "XS3NYZuHbJJsDBg2GW3U4Z4a9qK7UVzsnjgz7dg9KPjVd7QDAvPoxvAKML5QMD1agUE7bmHMd6bv2CzzdqhJRjq",
  "key6": "YfQPdTHzts5kje4UNpYuQhrqZMYanAAXMoh1M6vNmYxWogiffET14MZ66m3TrZpEL1kzRuRS43P66fnwiXoe4hm",
  "key7": "4qEyKp9iGg2vvLunaewrcADDCWPM7P8BbZbE4XMb7HggLUdEnJLKDSBduqyqVCWinviEZnyRgPBfVT3V4t6Q2k8y",
  "key8": "Uue9zicrMuw51uEA6WAPojZiJoPByN8DCqyA2hHo88DoY7Jyt3SFPiN6b9fUjXpT3KjgodttKwWXyidgSQxUYZe",
  "key9": "2oM3QHsV8rPtWR7aYAVNHhFNmskkb55NyooAVPG9G8hCWkXP8gGE9oHGzzaVd7MB28v1mr3ohkn9hCLBZhUURJgh",
  "key10": "23jWGRZbBu9AuiRvzBwGpnQMmttjp6QZxgb4Et7gSDvH3P5yMPtQ3VpcSLSu4KT4PTMcSTkJQfd1gxchDm1nG4yA",
  "key11": "4PyG1fWkLWVusrWiXhnUB5Zfgwsu9Hm86ezpGuoXvcFFMxUr1gTd9wJunAZVbLyZKcCKEAxE6sb2Yg1ASv5G3P3v",
  "key12": "3TNoGQctceghRbXapQpLQoMdq8LeMQEEcEFJtpGA68eCMWJxcaVqxo3JgbqgFSPD2G2JZEw6zyxhdNNtkH4DEYHN",
  "key13": "58BYtkqGGvdmgaBBQxPxoA3D1u3t3AeunWnK36sffAPtafZYYe4jNEh8WgYpKJirhmoAV5TKQoMor3WuWWVaVfze",
  "key14": "TBxG11xR64hKkEwwJqYzoCrBy6j2M2zSDZH758tpSneQ6rnjzZbE5SjWkEg9a1UnPj8a291j5qJF9hoJBgYfujM",
  "key15": "2k2uVjpi66NWzWhnKYi7JLm3XMeWzmKy4fTaJ48Z88Q46Umf6nKuhDACw2D9EDCxztkZFBtptRA7E2zqfZjhoqMF",
  "key16": "5TgDmJeZQ3bejaRsDFdU7doFQ5PRCK6KA3tUuvm9L2PavMzUX4z6ANHPJYcBMv6eMEoLPAcr4ffZnnY8FrVztL44",
  "key17": "2eKzttDtuhhhurw3VRBUcrgxXBwFERL8YD735GHz2gpmwrU7HjtXJ57Th9xe8YgX7hGLUHB3NGoANsikh7X3WKRk",
  "key18": "4m1xsYfap7YUJKHrouDnKM28WTFcUpx39DCzd1Z3YwAJKvChUfpzvf5SHi2CK1YyqsvGnwe39Atp9YtGeJgZYFKe",
  "key19": "DQtVgiGvrzdBzWiiQxVpucuajJ8NdSrwgNAk7tqhezkUft328imj7GUoStMa9vtb6sb1m3vkRnRptXUCMHMmzjM",
  "key20": "2DTH5LiJxw4C9oU9VbjpfsehBzDrdt7smTvQ7BtTYCcjLaGRFsZ3vDN1dfBH8ePTGuX4cKQbb8rKxX4QtbRGrGxe",
  "key21": "JcDzQUYVeueHYB8YT4FbJBPd2yHaeiRZeJMTPxzYb3NRVbrWZK11SpHaTN6NGd4Dyace8JxgPVSYbCYis3N74GA",
  "key22": "3TcPyY1b6DWdYz3gq2zxu652RoHsP6ZxNfYj7HGvK3e1NdqqTces3PR3xH4omWi8tPsyBwGQaVgCXi9t1J8ELDwT",
  "key23": "3E8J5nu8Mq6WeuaKCW43pzYXPtY3SxPLAC5Zg1kZgrHmoHZR7GoU7S7aKyDEx6rrnEh1rRwb9VKnrW6UwYdbQ2g",
  "key24": "2pPy4MeyypSKKA9gEta1er5PxU7s16a1FoUNRqgjqgJeQfeTjNwNK5kPx4Sor5oFLNqKyb9xWHEY5rE4oiVn5eJp",
  "key25": "3wRxCzw1s9DRwfCWbhRVxs6MD8KZ1DchY4K3sVAjQ2aFPGf8LLQo4sZL4hgZRfcdFAFNetLdee9jDHdNQc7gPzx5"
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
