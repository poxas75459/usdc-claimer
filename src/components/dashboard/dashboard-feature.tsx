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
    "31TpZXMLUhziED3yT89mzgLxE3WTJgEBDe52GED48GBuziC9yk3iejuKxCTHps2Hh5qtkYaJZRAL1v3nCNz9ogHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQLbRQBMNsshjyCkLBQGTfyAhYdXuHdAcmCPcB8b9qJzD1aAHPAqCX1pVAEWb6p95mCRrQuzG6wjthKP8Tsc6kj",
  "key1": "4cXY1ku6MdDLEdFHgWtbhAq5rxbCH5Sb1GGzrFzcTBniC8sYyyw1c5j8bRpKBfhHUiEQkF25pDrocpXe4YE5JisV",
  "key2": "2TZH1cvwwGkUyJuv8GHutzJnUv2fHXNbNahGLW32HAbyVKNc419NSHZtFsmdK5jpCTVgTaCWdBff2rFxyUpLgHoG",
  "key3": "5sitwTs5VvfHgDtmiEnT1hvV1eKZSnfZhRxQBcrP29i7FCnhQZenVdhqrGSSRNFW8nf8aJ9sH9Qbb8MJTpa9BA3R",
  "key4": "W2w5Qazi7noTGow5rvtLEkEHAQoXCVuAQ383V7z5Ao57v5UpBEwYtQx2dMbbAnNpWHm3EFSHRdSmw9JuQyQPwXD",
  "key5": "5FyRKjii7KdrVoxmwAPPjRCA6M3mSUxLkt1smxzBi1bqXyGixcwjzjNBGrvAZ2VWuEzeR7vSuY5bjEtv81oXd14h",
  "key6": "2oUqRmC2Ji9skoqVAC3No7ofiaQrV1ufWiB96cbiXytcXWuDF6uCMnaVWfSrEYJhhSDqjUoTuWW6ArqHpxYE1tks",
  "key7": "4h2GeW61utfX3YbBt9QbPjAJCoEBisXEbyVqpCwct8S7UUrTNeEAXWVfb73raLJU6ZfSpBuCMiFR8bunM3fVoHTb",
  "key8": "38FcE7SLG3TYWRAeNLNzTiKYmF4jfUFytmq7RhgajWfPh9PotMfnreJ7xhh7JWVnhswchf53fVhZ5a7KdS4GGUtr",
  "key9": "3WDZR16DxJ3b4tDxwgwgAL7SdJzekkMMuVrRoqjEgdB4parFPAxvs2UVq4QVC3GeZHNTUTUK7E9Zp6MceLhobYon",
  "key10": "47JZxeRmWyZVZD2Z96Q5BzqTFCa3VJ6pikqWZY9YEHUvuh1oiT3vBwE9nmUQ5NcirxQgkskS5GwP3FrJHF5NEiSG",
  "key11": "3nC878QsFScYHyavFyzrUW1NXdjE3J5KucEpiYFW9WCrLcyEnaeM1DQ4LtoxHwDyawicG4Rc1MV65xiHVGyQqh8M",
  "key12": "ncmukS7nJH5PcL4savB77z5yzuQQoAtqe37HVLPxbByBsnSMZZkLUvoJG9zX2jeuY2ccLs47PDKsDz3Yj1Kf2ck",
  "key13": "3Atjebet2CyTLACbWHCZYbCt9hJAuJceZz7vYQ3W6tCfgyHpXuU9ziXRRnevoBGKDUoHuzdVNTtxA2GECqsmjfrA",
  "key14": "5HmHaf57EmjZWP1RNeeQECg39VEvSsEvSpNMJJNW1ZSogZsUwRsfpr5dCVrBjWuPRJoAZ2HZnVG9DgzN1e9v1xJK",
  "key15": "5nzzM3EWqnKmGTgkFkG224PRbra6j2zjTWmkUPZAXsiyRD5n6joWcpn5bfS9JU2esnfBpUAZezFiazjvYrkuYE4v",
  "key16": "TXp3VF3vYqaPnQJNi9caicHm9JRuunBMejyULQFW5Qnr7puLxWUncLCCPdXntzJDpYAU9haYCouQYBXRAYK59wL",
  "key17": "4jtE1Upz2aJsvsrw619oczFrPRG7zUTHak9dGxFYYVWUvPS58XTUQdb2dSNLKcTtYRsPXFnY5XSstMt3Jq9JBfnG",
  "key18": "2yA1cjetY962yjbJMjdVQ7Wti1p2ieFD5tSmmfqPNToYYs9FVUT23sKwX4yp7nCjc1GPnKqawu6h55UYCvcminYB",
  "key19": "2jZVhH4M1uqVhP6FQ3cWzwduTi3aWkjTyL32pPoS4RrzoCCrbkfQYbnke9FyocWcRD1V8Y1b9LThhDqYbs9wAKe4",
  "key20": "5KEodRF2ocj2gdrHyMtFY8rHrLEFXBZDJgGDs8hmba74kDARmoibEzzXkAx7cZPcF6qLzPxbD81EX1mbmrwww8e4",
  "key21": "4EtpgQicUbx3djaAGAVCAsXnusb7QLb1Nj8r9ULUpBmSi92Vcuo48jkpoGbp8Ay9G2RHCfTXnNcpdnLRLEZdGZgu",
  "key22": "2fJLGhMbwLuDLKEweyLLyEhenvGigbQWbBaq2z2rJLXEaDvS3ymCfsdEcYJTXW5vtdneenQCm3s84XD9mT7Lvs3H",
  "key23": "3mikrawdWVd44DAfwmLy1D4DjwHbXxtQEh9ojYUyLFMVvpEsb622jsD7BXLq4gJN7r999KTmCt1nPrX5dQh28udw",
  "key24": "4bVwGhwkByKircE88Mh9nZMyv6Q9RgkR3Kzw4cYazQY4crNPCRaujjYFgBLMNtN4sn34xk9VVGWvUpPCThQyz4Mk",
  "key25": "59krDLXxn5Lop6vpoAiVQEyMZAFGLqw3fJmmKx7QUVvQiHJJ2jy4Ubpy5Sn9z6zTqUMNea9qxtiwt3jLmbYpa4TR",
  "key26": "4RhDwFk7aKCpTFRxseevLcXPopHn3qQAdh49nhNCLz4jsCZR1PHAaSiNys71Kx54GYDyDvnsYjTQvW3zfNoATRwX",
  "key27": "4QXFxYE9tpdtv3wudjfAg6W82ACxJGtC8xbETnPPsrJGZuu3oTMo9bywZgiPDbbjm8T4X3x2e34DqqHyDM2tAPey",
  "key28": "46JWq8AvAkLABfgaj3VjRKDeKnRY4Gp2kKhW9F7TcTNirReFqWkbE4j5WNok3UKxYmjkVxCoxzC2o97365qygZgU",
  "key29": "3gqNs6ZXvYxASsgrAMPod8CGcbgkRNx1ZmVrLG5c5nGTXXT5WtnZJqBv4UqPfTjTAhrNF3uzcKUoXjRaBKowaDs2",
  "key30": "Ltj97FtaXMdrHseG3XRBPmB3WpyFNSzHZfbtAPz4RjawqJXLZVpkKkyw8vJxt6igjLkbtBGeaouWA8MkW9iz11K",
  "key31": "54UwXQLR5ZVBYuyo9eat7ARjhGC5xWTHPvTNbDi5Ur1S712K9ihpa3NjB1rhniadFhtQhnzpTMgxpH2i6NNL5xwn"
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
