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
    "4JMgSfPtxgDsuyFwvZM2gfHYBSK28zY7ex87KKD3xjnSSAXddbchkLQ2omt9mHosDoFsvbt9XyM5vqBjz5jMyBYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmiWdQ5NJHL5hGTWmCApktjEbAGk5qocCNVWG5Gx87v6GBmQtn1Hnuovs4DEbsyEfsYT3PuLM2YTd6jcaVf5esx",
  "key1": "24tMS9XC3YfXsoqELnxescpRpUj3whakpQAd26MABdM1q5znFYKNsZtKJoXpCE8dJz9Q6Fm5L75ArAUG3czRn97e",
  "key2": "3bLX3MeQKRwFt1BKTSLDxgu7WqK2RT4sKxNx9sSUBf3LeicTaR7HkBtwqM2EHiXu2W8tmNy3DJAaEGEYTE9JXjQZ",
  "key3": "5MfbVXyNmmgNkSAogq4bpXpephLXQByXwef9J6p9m6EJhAVcre1oUr8pkFuPZn3Dto3jywxxHhBwMKjsgbXReXrH",
  "key4": "3Vb6LZsFgSkNxhCrz7z7XqH4wsFJ42KaJ3ALqLZiLXVJv4h6PoAfrrTwzyttDXVwo38ZBs73PNhxzyXNm4T3hDmm",
  "key5": "5NXejY4aX4a1QNw8ESvwfNxWq1Sa7Hu174GibYDFA78BrVgbDCLmbspywsvKyTsiS3BbaNoJ4MvhTwLr9bxLPWQj",
  "key6": "55eNiN4GqDDCyBCGUfC6vna5ZS4hXnsjGh3aT1T83pwmaCwXUgDhexeyQ5PjG63uDezWKrL1SSWyjD1XWvYQRt4Z",
  "key7": "341qEdTELMRVPJguy6CtKp2WxPLexyoH8ppWuq5cQfzE3h3rePFpsEwAaNiqGZvSD5z64vvRdJnnWKRsyE7saNaF",
  "key8": "2nhKSTkqiHfMupzg21ieM6LQVbg2QifSGBUD6Xyfv6UXNnjLhG7cFMByWapkGPyPHfuubcrzvtyLjmiVFUNNGzG",
  "key9": "3H94YHPcXH225Au3rVvwFXoWyoKJAGryuMxvYnL8QK6XoJuQSYVZjfYsAbQYv9qAx2FXZQkTSUnRun5DddEoh9Dx",
  "key10": "cmwr8k4H9kUBZAG9k1iSWcwEAGstnPs6v5hFin9npfBVZ6F7rEMjUFaW1UCk23PeGijXd1kaDkSyH1SYZoyLAyv",
  "key11": "5C4gCfNJRMS9gLmzeefcRDMdw5DCbn9sXL8SaQMhMMCKy5jj1a7YYnL2QwFDkpdQ6WpBTc3aUbEoANX3qpTC8fFu",
  "key12": "qo6XC4dAdK87Gjh4nXjrVhSjgsjLeLLdipugqLnUXPrzvZd71PhBTjCWDkrqqDEg9CmpdyMLz4BEsfKYB6LvWym",
  "key13": "48bVm1chbKf9snXBkXsTcV8KcMPyHsgUiRYQFZjFVu7d38GQa6VHZJqeRudUPhSgQGw9diXNxiHsuZASTjnPdn8w",
  "key14": "3oMR7D44JezkTkx8BgSbmEHzRW6bpoijnEutit3GpxCrnqdixYDimdrz18zV98GdXguCUvr19zemogfuvRN9XfJB",
  "key15": "2EUpgd4gzSCKRjBPcYmJ55weCutU69ya8CWKqEqD3qj7hDoJCtVQVQVCfFjMoErpVnL28jzVJUkGN9aREBnWArX7",
  "key16": "3HRnK5vyfTr61Fa17jg2SxrRM9bCuugt33D1H6LjsE7bTskAGT8L4RcQW3Ws9Q7Gyj3nDWATNTXBYgKxGeTxvQ8B",
  "key17": "4DcvRKjmDVTqHKcUGSfKHKERwzaGYE3WfAJLwVAjC8RJd92ySnXGAb19fKTg8mkNmhWFsZfTp99V21YPdssBSoFo",
  "key18": "4hRYLy4HNKE6sx21QDn6jVqNyhptKS1XYotumWjXxHck3JJKuWyxJBaLHYhkFRKMw2B6ogR9QY8ftDt3VfLDenxx",
  "key19": "hQdUr5kSfFMHoonwV7JJeE7Moiq8j8bVCVrQ3ZJ9aBPdBq3eGdszGF1HsFA4oL3nNH9HnyqUBSYtJxSZMS3RDGV",
  "key20": "5gGRVKoS5rU5ka5stTPzQYUUjnEjyyr2driY15EYdtTcq3hpC4ofp97zsGFkx49rqgmy5ywzPnZnF6TetEjZUBM",
  "key21": "2MsnHcvc7a8oLZbogrAf8rGRiSRagdBakU8tESkrbgxsCseraSNTcXqPgL32U85yqCpWCUh7iL2PisKfPMLcQzjY",
  "key22": "4fPpm3zHp7UtL1gkqGDeUNwTc5oEBqTNRDeFKwg5VJcTrDytqgu693dyku9iPPsgpBsGJWmohJqbHDFJT84bAorK",
  "key23": "5KNi5PA4Ugw6zKsXD9uaukfkWrLhH8gcd8zaVGYW4gZksKTXJ8RQr8ig5LtiD28tUyYoQY13nCKFVcKejf9FxqZ1",
  "key24": "3hBG4MvAzw8y3YgzKWKkoF3JJ5B9RnurCLJrZKJBz4oHonyP3iNTLnqhFEud5TdKxZwM8K6QCQdByduRGiZLY2gY",
  "key25": "5g28WG9JLXQDqSsReBBuqLMeEx9FpDP9XqNTviLqZkjkoL1GqBxX97TPajBQ3nLrDLbEMd8wgGoP8JQU4BvEzfxs",
  "key26": "22ZDnX5f9igfR3pU4ns7Est8zjHwtn2XQtEUNS7MywnhsCk24ksfHUWeVYGFqhqkTdxENmYhzt1Srm78YGJ4LTwj",
  "key27": "ksBPN5XRxeVyLHkRy4jZ16ZrV5ZTwWbazw41CBxbF8HwgPVYtJYqh7h8dCLTTQMzsex8QRNyme5FxD9Wpeie4Fj",
  "key28": "3FPmtV2xKQtzD3VPWjWCQCWXuBk7vPqDY1gDF4tEQzGJBGpXsGrDQFEQN5oB7bVrC3Cnqz4i2XZMhyTy4GQP6KXA",
  "key29": "2gn3rE6uX3m1DCV9Ygucq2QcEeLHjoaWWoLH8r26sW4Mr3wZwxq4aKJfsn9FzfmWb3FemAvoGHRKcZc7ii84gKsr",
  "key30": "2yvsfFYMiyjNBQsnCafZiH2EmcbqhQgXNJQTFkkK1gcByw4ynRdtXuQq3BfzKnevfGBhdXtmF1KosGmTkoy7p1jy",
  "key31": "5FNzqLoFjuLoYLw7iMEtBWGu7eLtwhDPG95qreEWxg5deqByacW4hPeFSrHysjfpuyrTdKPwkKg4uDmGPLkNpZEM"
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
