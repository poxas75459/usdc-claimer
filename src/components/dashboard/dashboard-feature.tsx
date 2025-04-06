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
    "4vNw9carMqFnaByjCKv8sfREseRVZjcMoQa7aaLxUEZM2wnRcd49JpkPWFRtKcPk5AXLonPvCNo7MVnh3wXB6T5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DsyWtkGQ5XSUuA8tbHsEFYXrNixjdMQtXhF4TGNAT2ZCjQN2BpatXd2cCvCpgA11Y6Fb3yWZE5fqdNUcSVsfvJ2",
  "key1": "2Ymwqi38nCGgJn7TXT2reLe8mFkpff537uL1rvLyP9HvmMwiF2JxdMrPhgTvKkA4j4hVok9oc4tyU9tzpoenx742",
  "key2": "4W7xZY64znrKbLni2ErVgE1vqnRAoL4uWigdEjmyGULA1sdZ2fHhQ6Jsm4ZvVvz4RmjedamiaYtf6KHNEXbDXWrC",
  "key3": "3ZD8f9hQ3wauXBDB4r4VqkwcX6btDPgYSqeAmSEbNmo4X4Hz5XAhJ71p5iRhUoU6dSmZ9YFSSD13QvniH572qqXU",
  "key4": "5vzKxfykz5sjBXD6wcWyqFQE6YqLTHFJPVj7eJVow1RtVUMusBNyEs3wA3FFkVpJVaTNnwvHrLbvS5y1dSije7VV",
  "key5": "DScEYibyevSkPtG2TtjSDgYzfPbxtBJ98LnCz965frvcPhtgEX4bwmaHtTtwkRoJZdPuKooYTQcgsMpv5Mhf2Lu",
  "key6": "5qS7LBtNSxUXxoJnnPvR2cK3sNxi1Cc1vpQWPNjr58Di2nKA4GCXciUJaBhHswbfBaHyPGX32mVsjMtBB7iNZQM8",
  "key7": "2tnfmUVdSpks1dCzLPqFMif2xSbEm24F92MdCCXK8NTJ5bq6mpR5EL9djWqM7jwHSxBgMWgfxT8AbkV6pXrFwSVg",
  "key8": "54yUJqh2iEbqPthRLNP8Eb2pUDosHXuUZrEmgZtfxAJ67wNSV96Wtox9WXnF9ucMsWU7hX29nEzWVnfggPMKPama",
  "key9": "2wFRZp7VUBXELX6K6DrcddveTSvDH2QPawBNhXP3nDEBcyDdLp8T1U3LfxkWK2AcNE4mubDdJemqPpCLhLgEBmNG",
  "key10": "396LX2tWLzmCTAs8wRgUVDyva8FoU7AstV6hA4bq9pvgEMAhFM45xFDov7syxk9bbvK9B9jv1L7HPjq64oViagRZ",
  "key11": "2B79FMbfLud6tyXq4L4BPFtrRXXh3QUtLTgP3mWvQbgXMpogfAd5zAuJyaqWoBRoTJJAxdnrqYFiw1Z1rBkFAbZ3",
  "key12": "4zkyf9bm6Wbd2eANe7ZP6UT5fcGZi5EbuMXctP3LfRmjRePry8igdgZvpC9PQPDR5YUtivp318zRMWoC4Z6XpWub",
  "key13": "5PsXKNpANyxHD8gwA7rncA5xH3L3w9czngRYheUABmKv5ZSW2UGiFUAfXwy848QpGbhon9HL1dGCns1aaqCDmicX",
  "key14": "27hZoFWda69xnKYFM9CqHHQvBzCea1118bSSAVwuX6MSkkcCdSF6haMaXHD2co3fpLP66nxD4bZ6pj26DbwhieJd",
  "key15": "5DvGyX1RUbZ7EyA6naztKbq5tfwhYm6vhBi1piNB4qtdeAZ4yJ3SL4QmJrBQsFYAnJz2ppMqv4hzJdhBr9BXCF7S",
  "key16": "58WTMGuCrxZkVeb8kkhznsxN7Ek9qRfiLviFgXL2g3MPDGhgb3vC2gKaZAS4HpyQJVYwkVa1ZsMkoEidEGTQwHyZ",
  "key17": "4FNiNYknJd2nsoAt2kxN7qjnNEk2BDKhuJ1YUVbtPmneEEoTaVPxq5wuDJnqvZK9SRLtLJ9rXUtSQ6TzjB9tuBn",
  "key18": "5qhcQVPhhrWzzTs1Uc9PaCCKTxFhz29dULFahRYqgWvo8qeXmV4qK7Ui4RKa9YcRd1w3vbjymgJLqn8pimBaz7YJ",
  "key19": "sLQxHSZoJBpLFED8m3cdz9uakBoM65KndW4q4add2t6PTM8iJQmGxsdL5JrAJRXVEDC2agYpBSx8TAGGTbBiKte",
  "key20": "qrBzeo6yHKFamS7Kb8VGJfHbN9q2Sc8H29p9gWMn7iRNUPU4RxdmhyFehgJLKmDCZCU4bHgDZ2bkoR7izNFZZeJ",
  "key21": "VGoMrHPWis4gYLdXaMcYrPM9usWzGP1YEL1v5VyYtSaZr7PuCsPYPvYwzUwJAC4ViY2bE1Uo23r9bUDwirP4s99",
  "key22": "4k7YKNZDMpwUGAn3cZtRxL2ZWrnZCtjUdKSAE4U7ND6YJc7Ut74SMvZ2MATrfjYsgW5SWPuhSxCBcP2RbsS83cbW",
  "key23": "4ounsssA3uMB4MADqmrCN576mzRnxtQxYT5PM3ocWWF57wqBszcD4E7UwvG1tp48qZkWhLAMK5Qf919qDH8jWHBg",
  "key24": "2EMfBTFBMQSDKNoq6JFKxADe2xrVBx2t9xCkce7XsHQG55FvTuMyXqzDgBYMhCmu6XSkSrsisenUpeLgBSuADpa1",
  "key25": "5vdxGEDEYHHVYRwmrr2PJxW8TZhUxMUMoSDAHM2FhBtdVd9HvaT3XZpzE8qdJfJLFbzjnerUYGSU6EZmkGWZJB9g",
  "key26": "63aAzgPoSB9kMLwKLEuAQrcjD1KJVWv9nukYb1b9rFZsNEhmHJ5xvh6AEz5suvE6FScpM3koKZi93bYAcgTdFjgJ",
  "key27": "3sCie1SQ48MUj9hyxfjcefL9yWPBuPtp9nNBeJqRAaNUT4Cjq6rUn5h6N59Rw5hYr43FZrfWRnaWJH8anWXg9A9S",
  "key28": "2zn77ZYQgEARauEFq52BPV1ZG6YEpKukhnLD7MbDFzgnkG5e2Z6zafLcxc88V2Rzd5Bcsr9Ao27K6HjVPamhyR6Z",
  "key29": "2GuCB1NbxJfFj9LghbX7LzZRNo2sqmJSDKDC2Gs8kgq4ak7krdRGsPHBzjGQAurKwY2dJuU8egtKAi1She8NbbG1",
  "key30": "2P2N6UcPzLCTpodERUJ1GHVhJwQLW1SxTip7hkQrHDCHAn65R1QKKLAo15RAWkJXkc9sWyH15bVqDfs6ZMx9iqfA",
  "key31": "6dEsTowNpbv2MVtBWcVkYgwRo1jND6m3SZirb83LJ5rFyLumCA6z95vHdyEWtFbqrbbdPYn1gwgJhnJ3oX1WTPr",
  "key32": "4aHCe4UBcDUC9XSnbcbUjSVNS93NjmeK8hBkmqCXHdYde3EswL7RZbv61LBa1iPoK1TWyLKcoyNotv3Ra65SUkBH",
  "key33": "27YufyqRtrKKPsrZHxbEXBjtyBTS2hwgcAvhuLpN4jBCRDhFJsuxh2FwUcxGMyVz4YNG2eWNEc82H4dsEdshwohQ",
  "key34": "2zLmbJXGcYFW4WCsCtc5zFaJ95UwyeNa89gXrnTUv1Kj1cJmUEe2QgbrtamZvgkcTbpqjjQksrr8LAJsF7xH3QFM",
  "key35": "d8UEa4tByRRxPhFwEfY8zR9BHYavSqW61eQsXdxNPrW7Lq5kvRNdo6UFfxTFAFj9GBe7xuij2ocx3jDV2HNHJuZ",
  "key36": "5m9Q2ZWKDakjrRDJmkyWxh7Yg4b2eJ8LWFmbBhxNwyKv6zCRT4sFQRpJebwPGEiFXhqoGvQdbpKTzT2UbSbk3JUE",
  "key37": "5mr2sZBTKdoC4Sbnem6wRFAH6rMzkFYvad3DJz1e9QQnzmDDRB4fSxvaHR1fH1obk9HYhKjTU4abTGsAFiXZFWmF",
  "key38": "52NsZakGuMS7SzeXwuStwHtxBVT97UWHGbAqyRSdXHPHyhWFakKyf1SpD6bhHmESJ8Pcf5XGoLE72rs4iDE9bXPJ",
  "key39": "y9r6o1W5oHQZsDipANB6tzeTarvXKoSeDYPyW6zXd3i1Bxsgip4EPeHDBbwSidNDyUoKzEumz3u794mmjf4unqo",
  "key40": "4LcUuGkFVsDwDwKWaPE1v3k9SRKozcTZDuJ9pw45A9jUQiRRTWFQceTYkWSAqXtJ4KAojHwareWy6rMFEGjxdwzS",
  "key41": "1srMSKPJ15hZwNuEzk3Lw2DMS3wUodvA6xyBR6qUQ1WbernCamETj17fGYgbN1xn1U5mwo355Dz1jbrKNtXARcx"
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
