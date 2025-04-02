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
    "3NM3kjn6p3oTG62GmD5tgdgmCDUA58CSqre7N53XLebJqnxieiQHYk2b8TWFfjdbWTwh9ArwafzL5paBKtbVw3pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZyZR17ps2gbNUEX4AyqxZoqvhQSuXPkPSgsSviG6MGBZDTBWPsbb5SEqb1Xq9ChpeP1rxk2cNWABDWtt6PVbzw",
  "key1": "36HppaqGhtv4w1wJv1kpSqhEHzo8qtjyf6XeYCAVdvE2k3UgQhFcPoF5Vi39xFAa3NmPskthGYyCe8oPAqUvUDPo",
  "key2": "pwJgKKTp45o6UJ8GeMTDqezYDnXrJW24DRRwVpm7eY8y4Dsda6Gnyurz2QbY48fnsjDhSgrFScMk7iMZLpFb5ag",
  "key3": "ShEhykwaAFfpCsC6HCEqUBmmTJHZti2wESEnDeHZnsWjM825dG9EzZcF2p2qLzFiUZ5fMekQcmEPT7gfifUdBrx",
  "key4": "33Pb9jHkyoAzha63xd8be6VP26pXYGs8risDth41Xm4DwD71FgB82Bb53kC3k9gKfQR7ymkKgNb2g4MifgvbMQnU",
  "key5": "4Hsu8t35GvWhkPDx4BRwmS87vAFiJWw53ysnnspMon2bawsbhaAJX7VAkoQxhLouBEzcJDLq4uxhmpWCZG2A5RkB",
  "key6": "3N7bzoATKa9YeF8UPi2C1oc7RjtTQcTtuETzF4s4ZCqGDZVdSLzv2UCHjxmaa3u3e2dfGUWw1Feg8cTg31XawTiF",
  "key7": "fcrRXESsWpnaeq1GNgN4JfWi4D3qYKy9rY2oTFskumECR5cKbckCgtf1uWmXrT4JvrNaRQeQHcvAvKo4TZqmkVi",
  "key8": "2p2ZEByNZvCRkXMN3HEeP6emx5167c4gRRXVCk4gidyLtbd9DZCH5zfFHAhsDNLU2YUAVF8VNBaE12Fm4v9ftoBB",
  "key9": "5DnWvretK3EcNMori8jKJWr4x1fj4FPtFu9BuiB46J8ru8x5UW3ffCtXWKBaD9wq9pYMBhjgyWL5A7VCHfDcWKDg",
  "key10": "3YKDm4tRrrAGMLR48oicMLX1aJmAZgWNiiEs18Y8WYmr4fkKpjuicy9zjk8RJU5aSPGZZ3hZ8YenwbowZ9dyWSEQ",
  "key11": "62Jye7sup5wpVrGZSo3own5mFeCTGbyGMR6ZmgyxKv3kgqG61wJGQ9CpAJmSXpo9fmwfEmbHhA6yeszQ3QVXeMmT",
  "key12": "5pwJRJJDzK8cKhw62CUKz1fXQT9o64iQZcs3hPTmrDmCwUvMTyedgqbbRd6A1jX8v3Mrq2rq1jyMqRCFni6B2D7c",
  "key13": "1bPWt5PU5raeYokS9wVFRrkQSxy2z3rGFAoTgxk7gyoXQ8f8k2DxYQcEe3EXK1f8vSDz4mYFoGqkCC5G8JdDX87",
  "key14": "3pxZTyW4wLXi61Hpy4Hc8ezzaqN1FYXPEYJeVWZGPX9WqDCo6hfxHBNfoPVWtN7A1BoUxKN6TeDpFgBw1VQCPDNU",
  "key15": "GsVTzEaoRZPfBCCGZCn1rw4bhcYEX7x65hFyiop8mPcmcL4zYDHyAxpKCFLKPpmudR2LWxdTi2Gdb1PYpq89kN4",
  "key16": "4xbhPFobdzo81MxYkiVXnTFQh7CWTUbECaVpszxhsuTsbNRXde9hHf4X1Xt7d4NDVcapFeANtKHbdV7zYCzwkpAw",
  "key17": "47985TPKSSdNN2GnagBkGNsUtKXZgajT1DBrFkUsEvMo58es4wAtnZeLMX2iozbCWmRfSCeePNPhKx7nB8yYcbv5",
  "key18": "5HhxidwpBbmAWvCKFAH5eKF7krjrpNxQj46vAQn2UVWjSCAEtBFqepYzAHfW8Ct6QeYb3XcqumziKnJTsts3p2U8",
  "key19": "5nw8wn2ZQUiab5UqeUpGR8S2BBT2zUEYGyLXXEU7QHHcQ59kGwCT1Y8L76cG3bwEHJd8eJ6mMJLjTK6o5y3Sp7zA",
  "key20": "FSn5j57GXG9wsCsd5edUgwTii2DnSubNvYcFXPyEnc7GV8mLUQzHor4bTsHtNLqzTe3mVW2BSjw45obh1TBRUbq",
  "key21": "MFqeReuCTGccthZfYhChJia1Q1zaYAfmoFUZJRuSJBUXFmcKorC74cK6AR3zE8Un4nrjjoHd1ujdqq4dTvKu2Mm",
  "key22": "srJHhhRbBzY5stN5XYKVU9FGURViRtT2rUsht93SWp6KS8ymQw4JJMuKornSG41qgVBgTRc1xAxB1jXAbFzApXZ",
  "key23": "3ZsZ2cLc5wTRx3om8vzbmbhFgg3N38BNiR6nuykJW6C3ss2L91jHw4qocJHabufQM73mkGUnqXbivKt8b5pWK4vq",
  "key24": "51JcLoQptCGwz7QoycspCTS33n6xRztPNvUxBnNjbqB78Y3c7ADFdrexQgk99dzvn7JZLWaaDpLStPscK1ngPGxu",
  "key25": "3qLKACY9g5XKQ95AuhYKaLAcP3MCh2bEAjR155PnFz4Gps5QBNgHWwnomTgx9XWhWr1deTZCZ9cMTFy19EsLyrKe",
  "key26": "4SxcCsgi4ixgE6qQjRfWECVLsPueAoiShRZfqxZ2cVB3zMvhmvXmHXXewkpWGuuZsigBZsk6zxqFDrSZww5druks",
  "key27": "46SEiE8E9Vi89ZoEGQCvAE6ZAAqWqumksdsZuv9MjyLA4yFpfKt1U2inu1kfJRAtPmdCwLgiqPz3jTCjb5Bp4gxX",
  "key28": "2hNTx7v9yDYJnH6UbqHLEsk8D5a8wBxumuLqcDTFrEYSeJCuRL52pMoBdZxg81SkfjRSvpExWvst5ScCscBNEqrZ",
  "key29": "Wr1aSkyxc4Fkpojrv7LFR67KTmjV7ptNt12qT4j2A7fP7Qtk3JNnLXDqfd2Adox18oTqj86YqxMYA7yEPLn5G6T",
  "key30": "3JdezQXsSYb9CBFn8vyCquh58dWLCojhkaADjpts2EjSBhrPTaXtHau1J5xKD7M9GNkovAAcDYFsobmEdJiJmVXz",
  "key31": "3uLKs7Mwf1ntT5QEC5nwmgv1hsXFh6TV6HjQ7k1aNTUuquRbde9bSefXGcg33q8FZnDfGNjLe8jv7LxPgtZCbgvf",
  "key32": "2WWMU1pGMgTuCMDhw9JW8A3ADVQybXbteC5CnmfoFuxhoPwLdAzBEtBgVvcSeR2a6q9oYtWJSJUiW9f9KQjwmcxQ",
  "key33": "wuaFByU8cdycPVZjEVtRFHbFWdi8ex4q4WDc9GexTNSgBbFxmPNRpd42YP9pfziMMbWV8wJhcMnNmHo7zouPN9J",
  "key34": "21aoW1HDYzQgnK4YXPHNJyB7ddP2bpQBaNetA5GFPoxucLS1jpZh7s1rpTPrndqwUNd95MY9P2eLXWyKcyKKvK7U",
  "key35": "4juDMfoNCTpnnB7u7e1sXVGiHdEuhykkRt8piTyXg79WJxh68ikZGuQVnqcusXzwKutDJoLTiStzqUxSAwZcBhcW",
  "key36": "3P7mYUhd5fKLta5Ai9agYc28epakH6daNA8BZLZyKGteYept7WbPZQPtnkqRJnAszK1Wseh5i2V379qE4xxxMLn9",
  "key37": "5ub6mY7KNscejPXQJjcQvRNavfWDF9Wez5crWvPhwLRw9urRUW42sEHkzAPkAatmLE3X5doFVQ7yjnr5WDKSSBDb",
  "key38": "5pianUJp25Fq7iTmo3hEskQXyTHzrRkmnsyFBri28p7zjjRux3jZwic7GwfjmX84RZKdWkvMHEJxAwjQ6QazNaxY",
  "key39": "3riS4UBACDJto3Li5SWtZG4zxSFau6d9KnNRh2CjwCDTERJ66JsqmFHtgLptQq7U9W1m8FFFCCFziFAetKitshQC",
  "key40": "4B2Su6iBJaMJfVb6ScaJwNyWuQGh4q6W37QThDMvomUbFRu6h5Gaw8BRrLEz8J9PZobWowK2nEgj4RcqukyaNHq",
  "key41": "3HnT9FvtGJrgDk6BLhw2zmPRWagpbA27GUYB3iF9aLQXazkJXubsQPJvaBBNDXPgc4jRx5cD9v8EGBy4CwqQKid7",
  "key42": "3XERcE6a1LRQyN1GDS2FvwfXJk16RERNKeWaEe7jASjxBtnw4iBfVAHGv5UpNK1TaXPcGJ3ojChVJKQVgeb2Q2Kb",
  "key43": "41sFSnc5JPhZqSTmKGf5kWnWwMZsdkt3SDNHSyA2d1fTY3ibSC9JAmKsKCuhYXzBsPw6mZeXmWRpw9bLMcMbPH4C",
  "key44": "53ah76XZYAZABA52A5BgPqeoa4KWbsZorqGQDU8eTwSzhBjCH34br6KSC9vAqocUGFaM9n4bTu28qxyicQFujn2u",
  "key45": "3peqJ86ykN6kW65Kdq97XGPqCUFdNRDU1MP2xqBJntAj9fXsQFYM74AYzQBAZBNX7jEuN2wuzNvm1BL5jwhnhujP",
  "key46": "TXCvjn85giBZmiNH3DbECtYp1SpCbt6ZUMjdnhvXF2S1Y8rTMs25qYiC26QYRCAbGdii9WQiLiyMK5fKtNy1HTA",
  "key47": "eCuM7Vwr77UPQ6zi5yf4jD91PfPiaervZH8tQLbm4Yb7FpQEHWPXEjwR2AeDAp9AngtsBYxm1SDrVeMoUBY8kAu",
  "key48": "5kPNWVCJiYVc88D8nP9ofZP9o9fazhcQtY7XXjSnnYrBxiJMdHyYYo7KfyyGmhcTamEK5ZEm9Xq7L8NNSRbwSsXQ"
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
