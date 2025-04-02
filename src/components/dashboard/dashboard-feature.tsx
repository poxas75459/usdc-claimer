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
    "5RMWvwQhMD8xmSNnMXELytyftng3D3oGxdN6ndN5LTWD31NMzJPPnCZCb4PM4q6MmP7dETSyDnt8REP2YwEnNL1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wvzf3YBb6QgPHXUhHVnvNN8unYCW5o5WJ7oadu6DDELWzMz22tfMxJtPvwA7jejwfTXq7ckCDLVWuaNPdjdm24s",
  "key1": "55dTJj8ruC3Y9HqWzGhsQuMfFRYSZ7AvRzniVrcCvHqo2TxaPP27hZh9SUtxf3dApY8GGaSnzskjs7wfVDQ4u9Kq",
  "key2": "3onxgE7LFpuNsWmWqXcWKsvzvLQwZtxxmKrE3PnnHAWhaztJ6LYhQASvwbKUyeC9sU7iZaYwJZZS8CR7tNRAU6i5",
  "key3": "21pxFxgxEraAgMcMiFfCnLa1BA12iz1Wfdy7suZguSFPy6mQu1z4dp1xrRepbj7XTXsD9HgnYuZbWs5P8zviETjt",
  "key4": "2m3n2oq8Pfh894LB4jKoMyhiVTpb3VDSk2Tsd9D449BuDxjMixQLC6fWD393WLUCtsdrutVBmm64QjCzGNAcsguC",
  "key5": "56sv7ZJuU9bhWzdh16c9VLUSEQdnhefHMozLEEexekhhe4gGhgX5uPVYnrtbmTdRaHeMTzfzJDqkn5z3bEq5LL1Q",
  "key6": "5EyuHXkKNPVFL2Tqkayh3BH1Z7KC5eTTKZyHd8jNt6MQsq7X6WqLbq3q3YFVTzWRz6sr6dCXfzXcyS5KaUGvqSfm",
  "key7": "5cAkWYsbwVZzrus6h4G4vG71N3mGMaU7dYW4AkMCCJ3Qo3MJRJe2wag5qfp111dooFg2gW6cccaY92VXctstNfed",
  "key8": "4stGA5hk4LRnKdzBdwrBPxdpFbYqQ4qtnNeEbm3Tw3oYathntvKecW7u8XJudM8b3zVoU9akWrC6bNYkg45PWMMA",
  "key9": "4p9Qx7y1bBPXBkdcetAMYsjpmTyz2WRcCWQK7YzycE9x5S6GHo4wX2aVNVPbZBz6ZaChyD18NUPhdwhCkWqt7UpL",
  "key10": "Lir51sebXujXVmLYCj17pF1HYQKooSHnhPxQVqHzDMtrtNr3sxqE6s7ZzFWdDG4NQNa6fL18CbFNJRVLeXHtCNA",
  "key11": "4U374CMxhjBa4snHehCzMU7YpbnycyG5gqPKoD4KrcuuC59ea94zevJed3Na6mZCa77A6PMgAyESmbkAHg6Wf2MS",
  "key12": "2BTemwLUvWkyrwMLgxSp4AsRWhgAxarYvcZ4TUQ5PJ59itMpinei7J9CyzCbdmX8YSk7KUoU5yojmnYa1oujqRbV",
  "key13": "3gZMCCobzrj3tNiGzXAE2z7jKm1nJKc7Mk8mnMkxEnreKk8sQyS3ioxv91sULx7WTyDdh3Y5HKYHeFNGw5AB7DqU",
  "key14": "2dQG3RyUcGm6834rjdk2fGdCxJBRZFngwyBzgjzd2vMbFVwx49jJwnpL5yoZtV5kLGXhijqfq6oBQqG2w57sXiXu",
  "key15": "v9oqsCbFzvPY5Ahun8X1xtUiRe53M8U2icX6FMzBXHqM6Kj8KKXFGa2jk5fzrio16Y59J1kfTaEVJwP4q27NuiX",
  "key16": "4ELJWkLoFJwpDuxEVuTjqyfWgCSxmkkHrafPP5QtEuenSLW2nTMxxQY78erpZpHF273At56Z4SuKvadjN1WEveZr",
  "key17": "2zA3VfQ2tajgm63TQwkUuyxZDCX7miRsXw7GUtG9dyxJ3JZbNky5Hq3d3CBaPTJMi2njpcZpAGhBQMqWUZbjwbYF",
  "key18": "5wAoEBTQvzfomX7xchMZCCMog5kWWyZEbRYawzUuN8J5UJSVTK7ZMATLERaRZytz9j6zkuRfeWgB7W6Qk3gnQz16",
  "key19": "4CBMSFScAfU6ac61FTkpqve2k4RVuEcU6vMoptXfGYo4XsYAAmVcqVqu3z3sNrbwkjYNdepYoq2vmjEVuWquU98F",
  "key20": "5k46PCZxEF9oWRJ4mmoPwJ1pSQpJzvoPdb3HYQJouL7LsqkdV4A9PT7t3xw5HwyGWMcVDBYhaQ1KnDkq9gkkhPk1",
  "key21": "yF54BiVt5ZjohFFzT1z96vVVZiiQSPpQDg82jhJsMy8ij4XydathEBvZG6TNsgUxZwSfoA2dn2o4h8KidGuZQTA",
  "key22": "2bPPN2gKgaWbY2ABs42y9TmHAzK98LUyt2u4hu191nAYmwmLp3VE7yYdUXApexhqXsPWFbU9ok9Ge9eWT5dfETdt",
  "key23": "3WzzU56MSiXMagqws6LYiXmmcEUSyzmS1QNdNuPtbmu554t37cupE59m1Wd28ZfkXvaPjTRvk3fkPSwpp3JHsiWb",
  "key24": "33fTKfV9tRbXxc1UVJNkPPD3Sj3ag31RMq5eW3jkWSBcGeDVuofUNo2Cd1UhvscbHgRYhMLbvJWA9fAovwV1M9KK",
  "key25": "4JQKnRn1CDsYeYywkgbPJrj4cVaRbKgmtoUAcD9tEeJ1UJcF7VjHp4psFvktJL9cBxEb7bgwPY9cDHnKYbHtsRCx",
  "key26": "2atuQPaC714R1ozxKZzBJCktN1DMg6GjUqVL69dWk16DakZMHK7WJgVD5RQHWJSjHt4nb8hetjNHYp8mQFF9dVaA",
  "key27": "2zzsBQtTLH5xu2sspgFbVZet4xZK6Z4FUfMmzSccTmqugZ6J2kDeH5NFoAfiRKLbExWiboznuuq3xNBh7eSxK13X",
  "key28": "3nfg3L3aVb4MbpPQut4RiuJNkwxRj4ejrAykRqBXgvAdvcwD6d7BzesVhvtskMeeh2AgWmtpKA2EX8K4gQLDETwr",
  "key29": "2szWCKs4bxoMEEm44KyDbQQtNSPeeUpLhoY2kqQmDtWZ3DF7RtvaJLSSmJMCkLrouB1mmJ5G651h7m9jHaGwhJ4x",
  "key30": "2hP2yuoa8koDYcHR5UfHGSYErG5NyR1n6HzDhfvv5x6Z5RGiGb6uuf7vGFhngn2AD1HM2fqHQNT2CGtQdanXYy4g",
  "key31": "3b2Bf3x9PV12WzWii53Gaa76FVrLZcMSUwVqCJNCA8wTXDvRaoELKk2hgAEjaJAuTboBezixCttvYQq8m7Uw9BM3",
  "key32": "2rZ6dbcwX8xYkBqxcjvn3wNAQ5wUTroiFrHRcDD2h3pb2wpZsv6dnuCk89EgtF7wrZqUNKq5X3oHAGPuWs8vnG26",
  "key33": "5F8gKXejspbGxoQaudsQP1mTXdrsc5b7avjiQjagC7o6doJBi4LdGBK84zRUx63i67wTpc8hGhkFHvQ9Np4KTeHY",
  "key34": "44X1BRB7ChqGT2c63kgzKUi47g4rLCaP8CeiiTg3KvgKNErASyCZgnuFBcCe1dgYTKAFzpXd6ACRR3D9ZWkVVkpR",
  "key35": "4Htcca1mVGNJfUuT7zkLhee7KgsTTENF9oFdwFVcvuCnXzMDyvFTiGsiroeR5oigzA1dwA8t34gySHeUtEcKWT6Q",
  "key36": "5BTms4oAdNvr69aEENM6udjasUzgtbPHazUa7x9VBWiwMVUSdy5dzHCVeuKvPizkV9e1GP9PqTsXU1bEWCFVx2T6",
  "key37": "xoZPpTyaZbUYHJff1FR8fqBBgQ6rLWyAy7kQLV3WpvVMZDUo2HcZtbDBjskmvCDXQ3ncyuVt3D8vUGkN3kyu1P8",
  "key38": "3FsD2rrhdekfuBoHsCAzTGJgmRz38rYLJag4jasRY5658pni8WPDFRx7uPLDRkbiSYRRruyMHvysN3DfyMKydyAu",
  "key39": "2uWbun5pt23UdwpruUdfkRQBasnitJLUc5JksxoZqjpagZDap5ZCqP9P19bgEYAfkQt6pLSDsQzJdAR9Xq3EGDiu",
  "key40": "TiB5vHDC5m5vM14HkeotpohHL4PiH6K65M1oedKuUmJ46GZPnjR6JJH4ChKAyZRnpGEznq3XUxLWgKZFM6Y7iFe",
  "key41": "3RXhtH9UCmxmui8Xy5QfGY9NoycPzyVduiw2Vqtov1KscczR7RQk4XjwDcvSfPrxkmfUnApnRkGPyuUeaZ5czeUk",
  "key42": "GUWaaVApqW41xj1qc7CSLNxji1bA7Pm5va2waGXhsGex6DpTyiYHKqTT9FaVxr9MSc72oa3MzLc4LjkWyuFjuXx",
  "key43": "65MGiYhSxejrPjfiPEFNeKBu8zNyrzPWxN2cK6rsKTxzni7dV2t7TF8zqgdGSxveXwZNKnVLWyPKpipS6C7iYHCH",
  "key44": "5jiKdSxU5wekwDGY36VH54QVrDsD3MJWFLRxxm9pNC7evsUYyXSDaNganDaVEcFh74VwD3cyFHSHUxfhaGzh75u4",
  "key45": "5bRuHCtNXKEAP58ya9V3bMSQ9Bk2JFLiRMbdA9ffvxodQuQmKsAtHofZUJVhv8SProdevEkrSNLFdYh8A8Gug4vq",
  "key46": "67NYTSwVh75NDAQ8tFSC9oJEajJu6LJGR8HXsV6Y1iomRtHnnF9nfBo8TfcButJK5becbz9QRbyqbbhHxFA6DwBs",
  "key47": "24FrUmEzR5UySdNTq8pDkWjo78YkMN9hXJuFmXqMDKEVehttRCq64YH1ZFTg4v7iz5cfekHnszXV1wPpmkPee7wG"
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
