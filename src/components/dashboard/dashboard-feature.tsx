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
    "45eSzarHoAk2YmxG9TK3D5bWms23PmXg6xKzUZcdfe4bJukWpwBAXg7jUh7pJvxR51rZbnzqC6saYRtfJqL8RZr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbmZt13MmBgRqFKe4GTWzHpPH41YYjFuiuCFpAazU4tKVDv8n4KyYX5TGQXQYXfTPy4NBFtXHDbTxwsFvGUW7o4",
  "key1": "3BVZFUQt1aX8UVqNxbjFNS15hikrN1va6pHRuJjotvbpq9t6vY7KQb9Ex9QCayZ6deYsyB4cA9g5kGKd3RtsGJja",
  "key2": "3FkK9FqJxqqgkC4fjzRdX7Zv9XPdeETyCtuGxZ6pPXBivDY2fBKoaFJqA3oqr8pETqsSX8mtdE9s9DTjgwmbRQ7R",
  "key3": "Lxg4JQAu62PXXBR639QZCYFKheVbTwGosro4EBRMgpXnxvDAx9dFqF59Rne5mES4GGfUMsw2o8YLyJ9grvjXNtQ",
  "key4": "4VHBzC8MKeduVhv6EQn44ykDUvkPpGkFFF47KkX6d2VshKoUZcMPYiTVCswFmFhEtSqZMT43PUfUvgWg6quztzyd",
  "key5": "2CCUxrvhfxfmysKhC3n8WFGDwCp6U4w7oKh4uNAf235Bg3VxCWGtjoNR3JruEWFATBcnC1iyoQfFthio82MgmJCF",
  "key6": "3RMSRkstj61AzYmPSXStfoi2zEPD93uiWVLPJsrqVWzL2WA14rGfHRpuUSdkZABos3e5EgGZKwwBfcCz53SiHFzP",
  "key7": "3R7vBaAoBNXB2debtpu7EBjBCrnrKXWLS57ZSBjxxivEdsmMGKMD9E8ndFRA5g6QycrtirabKXLprEGr7rigRh78",
  "key8": "41s8vKPNXTzSyCjor7vYPyr41Y4mAKctEXXRx6Ee4Hj3HV1emdTmr6US2fGkxUkp9C1PoeBxGBFByNTiUzeWL9vo",
  "key9": "2ML88gfLvvHczqKbRpN28GSdr1vCjsr7RmdbXvFFjFmGBF17AcqTyE5eHuVmt5Awrpz1Nw4UFxcBWiixRAJLWT8w",
  "key10": "nnxqDXd7qmrNqMzCpPoPi2ptBx1NEVLnbzCmoYFq2VsB3PzHunhnoLf6uUybbWDJVyEuiUApwd2zswAFr3JKqNo",
  "key11": "3eZyKKpaDYYKJePJaPcGEnspar4Y9z55G8DUxALHPU19AmVFQkc8CjVuKgchfXgSfUR8jqZtcAHe3DFabHrX56M4",
  "key12": "3H7R9i8vrPoaCE27e1j5uATt3NsDFnCRQo1xjBNDdmMmPFHbZSxZYo1sgDMcAdnhocXpv9bgaGT9QK2XKDH2DmNJ",
  "key13": "GsVAUdkTUXsTNsubyd9p4JF1DQ2xjAYdRMPBXhfytxUvnvKVKtFnqG9PqtVSC8wz4sfGNGRXnmAN9LLpKspG3QY",
  "key14": "4FkvCnTADF7AqfPmQTgRrwQcetb4AL86NbK14poKpi99uXZifH2YewqUrJjrKsxWPyt3z8bHNnTvgdr88c18A6Ac",
  "key15": "5uJpx9GhkedHCKLt23cHQXXFED9RXgb4S9NznhDaTfJT1f7b4VbhHcZT52oSpDPXnJckYVNYFNMtVjrAs3hJ6Pzg",
  "key16": "2mNu7WMozfkB7QKiRDgj8TrMeddtiPhHXaknQ5DbVZEoykuEQagKRjGuA7ujAoN71pQMgXdJdKQiuYxeXgavYEZ5",
  "key17": "2nf7Y4ui1Yhdry1Th2SpWgcH54nsMhvpE2oN2okbiLGcHpj21bZwcDFCYhKqyGkzJf9LYxezWUowNsin6jnnJatv",
  "key18": "oprRkoGMcnjNSsmmvGWdMXgrNF7iSut5yNFJfg3p7rugTp2JTooi8JEqiorGi77sJzg65vDDejuAnis6RPNwmbi",
  "key19": "4HZJtWqb17vwEV6s5RxW2rE9256Rb5DTnLeSHnnYWpcsv2kMoVXhBLjPwQXBxFJPMBrJgfkH8sk4wy3GV26jtvKe",
  "key20": "53N8mmXPt4AgPLJy8hbJWBk4ghcxu9hs1igWrzHXpkmg55yKswtSRTrcz6nQKZ7BjfsNN9QaNDAn4g4GPLyScHwh",
  "key21": "5S4yERAK3SnCjn6EeYsbjG7RTGqnRUrcGDDJHy78oF6fZSJVrE4QN9Mi2rMLuhLhzdJM4qbQo7qCz1jWPEQxY2Aa",
  "key22": "2bLjzWVS5yvEerwyUrt7d4gXQRnhQdvXQVhc2NkcDyQU5MS26Zwbmf6rR17RZhRLf8P1znAJDkgkdzRa96ySrzWt",
  "key23": "NzQGU1iHa4dkzEiFzMjnseASYa2tAb4xEeU2ifhvPbnF4B5MQiqvJrT9ujfKoiXNUFHnRisdCWGaVmJG3ik26kc",
  "key24": "WykSSqTSPFYygthQfQQN6mn2QGLNmHoarXGCdNzbV5SvzeCCL8TSgBFAAzjnDTHfnEaybfvRko1Wx5oCg3oAPzX",
  "key25": "4cciKH2CGcK1cTydWetmPyctDvNSXuG8HHRAVsRXcTBVJUgzcsTq79YR8ATVPb9xE6hDLHoM8sLWDS63HwukgTzx",
  "key26": "3Zt7Y6DBWzksoo2ujCUqUzheXwWJtcfreZDNhNJ5bNDmsUGzVzsJWQBJWzWMRH61SU2eMe426mGFiiCT6F4ghzT8",
  "key27": "2BiLtPcesY5uwqtZmG7YsLDfcb4u4jqERtYXGrgrt5bdn63mWmXBmmmNn5vJWurYHDw68cZXxSGMm3GWYKcA9RxW",
  "key28": "5vbeQWQKCQSU83DVgdS4CbLacZ8WgFkTTNsMB3LLhig2KvirGQbWFqEtmMYrScm2KVcazV1V2fqwfyGwioWG67Nq"
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
