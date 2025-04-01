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
    "tM3zrUkNgNnj8fd6CcVX87r5nUz6oV6LRqYs7uGmPJzEc68uesh1V6neXZB1qmjRnN7WAumkaWAnQ25uuHCZHdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227Fs4x1esDH29ghhhjjGk7zQNoeQLkexFBQmUMpsu7vaJ4B52wDNb4zbtXYZ2Hf1goTxBU1X9t3cRkErQYiCu33",
  "key1": "2Xiw2v1fyrtF6w2XMXYFzgUXJqgzvf3rTgupaadQYVzf6bdioqTXdEmJ5Y4bVjVVnK3LjCkpCYVifALYH4dcNAVY",
  "key2": "5JmDa1zi9RpMB821XPv5uRfQX7BPoofHRoEF6R1c3L4tZ77yXCGACdbfBLzrXuxP9hpfzVCejEuQge57EnQNNtjz",
  "key3": "4LfCodYqSqCxWLpMtVwVwMMJfac9sP31Tn92LAuaHmMxU2p8uDRSqHJ4ZJRa872PCQ4SwfewVM6zVYAXsYdHu2ez",
  "key4": "5qmAny5einZ5eJNspMPw5dMz1Zqx1Ruq2MxgxUC8wvATQG6ea3MqbGWd5Jj3gZcAKeHsrkbLK7T72vDZU58edTDc",
  "key5": "4oWGYcS1vbUGRiT1LAJbJDqszqE7T6S8aevGjKKCg5RjmQZzasMzUz1BPmvsPWpK7uGjSXgnrfG3C7zWbjopcJNV",
  "key6": "5qg5RN5b54afCF9FM2hUUoxcmcDZnrur45gcUDZfBdQSSNAFaHTxD8YAQqALMogC5HnV2diRKXShd94To16KRZfF",
  "key7": "2BmWYix6KdzASpqyy9uVqXqYm6DcwqYCS9dyEQzNkrBJHNWxcBjyTa8DJAB5yfS5RBfEB5vbsgh85aweVcCd7bRG",
  "key8": "RnFgRBtjgztBhLTboHGL3wpyWhGog5GQ323WawymjhRHtXma71TU5PuemTBPNE7wqFiRrY98rFbKLswicnea25Z",
  "key9": "4XT8c4ukVdyMMvh96AQcDXKPfoiM6eXCM2FQ27QhZAc7J5v2s2rXmYHmKJMuW3oDoxowxASznhK1K8xfmuecETcf",
  "key10": "DvxqtegAFXkVAFyhKP5e14BZHBVFc4wEZL9gfsY58sBQF7DpvjV1HinDccX5xDXmRbgZ4G2AGCLxBdzAu2BUdKe",
  "key11": "3dAUd9H5iWj37PCHSsyGMzhzux9rS2Jogm3g8mzawGR8fbh2v8ULjuRd6P7ambpKKqiv2Y53eBFowY6vNUezmNJU",
  "key12": "62F3kMNPC3Grt19AXaRVC76D3AYTXkHxVD4VSYECS5j16G22CfhJjdBTpYFJqX5US3gScetnn611wnmuzHCf1Kd7",
  "key13": "45X43neiP5YR8gbSzent1D6FvmPpmrpXasfMwHZK5Vwh34UNb128jZtBp13RmsLwebkooE6hhiPNCJ9xqGzoyHtQ",
  "key14": "2Rys6W5ovJARApoc6hBBfrxBFAeBgbxGW1NXEAR3CncZREzkb9emNHqXAt6DtH8U88wgeDugcCRp5XLjDPMJmYdr",
  "key15": "2xLiaSEJPzkesRirrfY7Hzk3WGVNf4YKxo9rdkwkr71m2DMVLPcAfkENvcyYzJiD2rks5wnx92P69CdhQX4XZDpw",
  "key16": "3Xqwh3kpibFh1erf3XjZiW2XgJCR7hwEJxdJsD9moZR8rv1yCSiHKRbcbn25DvkCUiTJN7DRf7CYt1Remt6CGDzm",
  "key17": "2rx37cwkp9jSZmSf8Pc6BuJVXc6jmHbrnDfLjyXTVcjtByf5MyKUCtAqd4r3dR44coJfBReJxobgDwT67irx6PyB",
  "key18": "2oDUY95A5XXQdZTd4mhim2LwpgJSrC3vVDuvQcgsrp6EjGHNgDENeZPJ2VusuFdm7wDP5MhU1n1TfJYM3vLX7w3U",
  "key19": "SGFzjbEJ3EYXfScb5U13WvijcFk9LtFZjSPuJdhobUxQfipw4DAFSi6XcZWTecTK4KWwSryoLiwsMJv2tohyQpj",
  "key20": "3LzuXwJ8cYzUAcqW81KxdTK35qtsz3u5W7yskUWMYFMnmMjtuvhdqCj2qKMx1J8czVhPhQRzA2kbf1BugriSgJLq",
  "key21": "4F5XxB68pgi2iQS7wgzFiexcZxvbkLVcZvAC4sRi3WaU4AFyWin5rsSyW5B2wpTDN842Wy7XUxVvgbK16ZAJHdGz",
  "key22": "3fuxHrXSH2J76WXoBZyn2zwMeu6Z2wsJ69CAYLT51i2hTESBW25dS68rvzQrG1uHsqLtwMgUjjSCSFHX1CCiwvj8",
  "key23": "3oY89vDAYMdv6kZ36PNodtBvRY569diXZDwmahHxyvTELfwRxgdPbZrucdcqVUSn4cc1FB5Zdu4WnRertcNvyef1",
  "key24": "4pRYYbAcLUR8u3HXcYmLGQvpmPZxzaZjd3uJYxctdmEDwfB64AeyYK7g1zNCtHkryj1oEmqWN3qit1KJXoE78652",
  "key25": "29zocWKveAjcA8KokNY7vTZrdzJU2Cf6GuDMc5K2cGAcZVdHY76b7co6jyk82zyCPtu2oU5EMGXUFSAsRVt1qJbd",
  "key26": "Ai5BrTnt7XRvxdasRbkzZrHUXmNxazm3JwbNCXiDUx6Tfsb4urLXAKSA9JunXvUB4HdH4vC8BVEnEKT2DsSWe4t",
  "key27": "2fqDnAwfNqLEqoJ6EUfZQg4fhvELiHBUgKeBY7C7r7pJtjmhtYYNt71t18ubMG2NyqXtTp1Ze7NdWgHCXPGXYDqd",
  "key28": "3okkM5JYZupZe3ijtGUG5DX3nTMVKoqVWiD3sCygPyw9By2dJ4n6TsrKaWegDwv3Gx9B4qgnWfNNQSTGNT9zHw2t",
  "key29": "4fC1HnscdkXmdjEdq9MoVQqXohATDJSs2mSMDMUMmY5ijWzjghyo8z43t3K6DXarchJ5tY2uR9cbBveAEYqo1Z2F"
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
