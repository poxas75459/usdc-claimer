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
    "3RZs5wZYzmKHZQCuto2zfD3ZPkMHQTU4BNSJD8EVsEmL77LKXbUUgSx6w5bdDuQZVE7HckjiM3s3Z9GKNvgqo6R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhZQqMSdNLzrHADNFfmFX8n6denfUpQQGmNvExoxtYfLRCwoMCAMJuikLBc35gSNS3oBej21kiuSDyLT6kBUWSP",
  "key1": "4W7a7yTpFX2zWZRpCtEjUVMwEZudk6nub98YbYR1PdZGKXqpsktgx9UnCzaUUXumijionnXTcKx9Pkpy4gGqtEFk",
  "key2": "6717g7pUU1Xjy3mTTVb3TJ9EVungdg9fDaomqiQWNHueJrfxEzQvfbAaFqCBXXepJMqU5Edop8shAWcUsNPd9dWi",
  "key3": "3Up4GxzRCT4ttXTtUqDGniwkKF9pdmD3yLH4AwQChz15ymEraCp4ErLYnBuV1JJNXJYgYZZy5M8NRaK2XqM3Wupc",
  "key4": "5huC3AamcSsSd3MjJMg3s951xmR93snegtQQpiaW6iw84hKBKqdUbyt2ySrD3abM2B6vsiv13sFemBfM38h93FXF",
  "key5": "3Z1WkjYPWexT469V46SmgDvpPngxySTekCPDxdPPjgntv3gMsWDdGpwSQu3Fsxj4pKrbeY6fohgWUryccnZQu6Xu",
  "key6": "2x57Bog527HsvmqupzXGaH28rfE2ninWQoZnuXJB5PqJHKweAnnn7upW8KJ1LkVBcXC9aXQg6PGaTkFq8AFJdFvn",
  "key7": "59BDXc5a6U3FfybsSxX5S3xNLxQcWR6YQhxooDCaCMjYwaQHEQJdsNpMoCiJX7C6ckc35pH6K2iDcC1hsYyzPRFg",
  "key8": "5atGYoopA5xQ8U59nAuA4onVY7ZjmTJSmicghFs6dNr3HHwzMVciZ9TREyYd4dNVcRT39V4KQ7PozBdE7n6yTAvK",
  "key9": "5aBEWPGYD4sciAg5hhwSnYedCDdK8cQYDFBRExBp8mVcrAXVcWseWuFDLBEVxwGipt8ghnTpbKDR2wRkG4Fb5vdD",
  "key10": "52PicT4tip86WS7X2EmWgfrGHrEvPFuWxEWrFKCmS5w4qaqypqgnMuSFqHEwbZXivNHoJRByGzY3CDhaRfs2pDxX",
  "key11": "4jghR73DMxoHtNwRXykmkNZmTD69BFWXLeJWX9xJgdpEWKernM5K5JCbrTSCGxj1hFCNZLsY8xSr3Zc5x48a9gZD",
  "key12": "3CDmwsodApUDYGCUHYALPze27ECP2qFqxNobWQaQo9tFgLfhPpTpGeBaz58gXvEsQBRNJsEtpFeiTaSVd5nV2HGb",
  "key13": "2QT2q77h7YFgM4TXRoNgpeB7RPxF4QoCKZDRc6wD4zBZVqqKpAM3aYJ1vgX38KU4ZerRLC6oSkktM2e1Rc1Ho5u2",
  "key14": "3KQJeXPN3EGGrWv3vAQU7iwXggWdqxqN1LsbTbUw6wQRLg34R6r23e3WuawRWb5bgjJUi7mVPJMEJxtUyjKi38fV",
  "key15": "4DAhmVYLEoMzY4dW8kvdsS7gWVxw67yaqQ4858niBLC1sxtnQAfQx5vMZssfhpHzzxRJBzyLeXz43hpTNsN2rgfD",
  "key16": "B2V1EnuGrvJukDraJ9N8n3Me3FcKGhxZeTGEVPTkoc1szTAdNgZ7wz1j6oixp9ueW29B1HHCzMiNHFwZ9X1buso",
  "key17": "37YVnSDFg9Uv5q1yseE6zNR5MdXeoD6oPWfZrdwtMwcVVtupXr8kDvuYx78N2zJr6DFuYpf3AnwRdmkZbE21iwn9",
  "key18": "2JqW9euMMdfw1h4SZd9EGzdsiruZ8J4YbWqcg6SL6X5wwAKbdYSGY42goW7Mp6AEgARv9aBaEk1bUfR2vmcv8T35",
  "key19": "CNS8VDzLTfSXPPDobkbUGaraJckuAHuBdkS32m7oMg9UYMyVT3kRQaP1fSJCwrBwpd84PPHghdasPsE7NM5m7aE",
  "key20": "twPY9Bx6Vax9DSYANYcG4ThHrQRY1ot1sRimWBEiKMVH599y5ETcFydfhPFmUrYwMWHhnneUm94kvsrAbBEs7rT",
  "key21": "iyGiWXmmCQ1qcu6rFUzvu8M5MAEN3dtPfqSrDu7jq5WbPb79LdLQHbQTzsBAAYbWDiXwVbh5BE9V23QS8qLtApY",
  "key22": "3toqbKKWFW22apPgnjM5bUsiu6sq5i7qHSGxMrNgQQfmtZKVLk4p7EWykGhySKHR5VL5kBQKNBevmw93m8QhPVQX",
  "key23": "3mEkspmWVGF4KikqDiWZqqs6tTHApp6GrcSRdGfwV6trFYhgkdmRVtscJfvP7XzpjAt6Awtjho4Y7BgFM58FfYGe",
  "key24": "3F4XQ9t3VW71jy4Fxuz3APYyce5j1ESD56yDJyPfoABSstQCfevp5PvbrEwTisBzCmWBFELeUrKLYnwZDx35ntZw",
  "key25": "62EkYDL2XRbx1KZ1madWc7VdSu3M8hxgEZrFrPATno2avkZFYU1yrCyyf3dYLAbCge1x1xnG66jszZ19N4GyNbEk",
  "key26": "2VGTYRCtVCH6fcDL8RamP6nKnjHzCnN14yTMgUpQKQhFuuQvpn9gLbLj1JVuGqG7BJHxa6pSWUQgHKCMA3Vpoy5L",
  "key27": "3g6gMUhsZnorCCmzkrL7HAgjDkKNjrBR5Z5nB9ALkG4nCTy7QmeUDT6L4YeBcSEFeBJmS4RgJFWDA3zBQwCwgT1p",
  "key28": "2xxb85qdiYe36r7HxrgufLUqJmB3EG9NzmZMeShsWa837KXpbU53hpgYQoMgPAvqAL22Luna2ivuH5VmhfKxjXuZ"
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
