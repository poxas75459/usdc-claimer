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
    "5fpka5qtunKePYDZDyfgpdRKGL1GWMD4NxL1cDjCGSkAhvKeVQRXVSihMJbxHXJ5wNJCeYZijwUK4ge5W9eZMGkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5HsnDCwC6NEsy1f4iHKj8WYnDP5CJP1hFqysTqxaJ14Rr2CwmWe9j9VHghnfi381NCBDzUFhvDwwnjGeDy9wUC",
  "key1": "WzxT9DuTGw5Li5Kwtpvw6XteEECqD1pmQUuv3BxaHPX1sbvRTswx5D3oiqTjU7fS6SzZ96FMrVppMyvzQwUSgok",
  "key2": "5AYDoYHEw1DPpzXj2Na98NhMuw2b1Cprg1Ui9WjK24AbGh5beSfEr9uUKctVRWHaKkT5Xnbmti8LYe1BYGhcUb9K",
  "key3": "mgT1u5D1SJT9njqRt1cjE3CNeEwDkpXo4SjqhNC7W8tkGYA8WBzbpYF7ykXozhEEgjkuoi9UztYoneXRf754oRv",
  "key4": "5CQ7xQP4uwbigz4Ygd2AnEhT9pof7K6xAb4QsgdPkqSDFnPjykpc1VRPpkDnZoxksgyzXyteTrj2Kv9mrxrjuGeL",
  "key5": "2Q925tM7vPVD39NuNXYsGqZMmWe5Juhc8ZPJV7BHJiA6xpnFei2cnXzrBogEx6ZWyecMj3QUYKXUsnbRympHUGiB",
  "key6": "65o6iAbGEjzvFDfNSMf4E2P2NVV7iZZdRiYzhMCPNKCoJWD8b5gax7WoDN1vYPtvP8DGfgdHdHC8GiTt4Zp8avmG",
  "key7": "5bpGR8AKUeQ4VfTUQBRFC6cqf9e8DM5fZQZCL1ZSZF1xSqPp8RuhNUamqu9qbEaJjZaYjDc82RTzpDyYLzVW2vv9",
  "key8": "5N6o8R3HpLWFfiCBr2KoqZ95Ab9HU1thxE9VZYYqvK4FuUazrPs46xYN9ghJb25PgFGE12PEmUXkYVSiEN5C9Wwx",
  "key9": "4h4ouVuj5eJfJVQpru9YofQ6WMEN56XBYGQNbhd2chxRiGgoQ8SyT3Ea6tDDVVNXGXsiWaxzAStiDbR8xrDiaCWs",
  "key10": "3wdaJcLNXhdmS4vdcBTnZpfkgQgfj5csGJkpqJDtyrZsCyNkNiACD9EEQmPNDh4DwWghnNt6TzFAoqVPYNQiuRMS",
  "key11": "5XqG8yxDuYRknXwVie5Xv2x1WsPAL3deg9gzqVv95FGDvYv3yGRWoUGjBn8aArRGuYYa5JRDmiNk7xXkqTyG1WLn",
  "key12": "5PBCt1iPSCnUfd6vX6AyR5B24kAz6yuG4htMay5bCpN3Hmy5oE7i72N9YrknQvSRCM6mTDUodYJWiZhfX3HyMhhr",
  "key13": "3C6RBFJmdQywy25m9Tu4U53yxLGfHkVEBRyrMYQTmcUVzMnxsG5rWCVDnjnBzGmCfrJcasZrAGmUHR5yH1LkKyVh",
  "key14": "3fh9aErT5pGUcs72BXAt9Tj12NgpFP8SspbzaHSswmuwMdnTWyXPoDKk3aUGADGBvfNNt7pby6ARTKyzpyexn8hb",
  "key15": "5rqNxV2jJyooQKtka18NrkecCPhMnMtXUM8nB8rb9CvvAirj5FWDtPceA2VQv7vtNuPnzKfUUZAKMappfm2CYdut",
  "key16": "22ajsniZrLjNnR53n66NxDGaRVJPiAk99gjUrFNMkLcX8RSdqH7MAUmTKhzRh7xLscGPedMYbstsqbXripT5c2oe",
  "key17": "4pUZEEq6wisjVQE1BpvxpsE9GHQV5vcDtxipfueUHB49XhnjAzgxBAs4dd8aRVSWSv5vurr1VNDwV4fGbBhApsHs",
  "key18": "3v1XnT7yDdbDm4tccAE6QDiSHbkYeW3BjDMmenk8nXKmRDqVatsu9YnJsUqt9GniiPr2HQXaZiMzmxMZECMVtpQi",
  "key19": "637SYr2QZApDhzfPkdH7nNPWGkdwqWPuxJFDKqZ2p2WJAnoMWQ2fAefxNLTscQ9c1pCiQsMUGUAZHFrQtbqXwcDx",
  "key20": "2tC51B9C8TrnMSqTtmywYbVoMTHEwYQtvEj6fUwGBHu5UvhN8aWGuU6m3symg6YLJ6YeY7jKUDSnkJa5bPWxcZYG",
  "key21": "5df74jeLEYXSjcnCP6S8hGYttYF52M6u2wTbLmqqgkjBM5ZyVbdWcakfwJZmyyhjbUjZEedYHLbsjcUVvsSCL9tc",
  "key22": "5XkiXWmfbSrWM1pxzyTpdYdrrp766CBpuuPyfP2YPdQWscN9DGcShdzazGrWwzoBJf1yb1WZymQTU12Ln2cbfncN",
  "key23": "5HsPw3L86cseoRJNTgAfhm77PEnHvfTk1jdF69cqZQwDgq9ShuYmZi8LE4JDBe2ppHSZ4vGEKBnt3giEqtYd7gUY",
  "key24": "2hyDu9JrpKDNaNhg5Pz5zDrv78ixFi5ycYcuCmkUptjm6P1biVEHiDJni9pTbxtTave1QxS95htzL2GvNFPLvV6",
  "key25": "4HrhFfLztGaftiuMJL4s49amFSxrzNDZ8bg3bEkmCkRTz3c7fQBpeJxCgjkzukEPn6pwpJ32esN7UqBMvUTk7yqr",
  "key26": "34uWAKPfbU24N9MC784xnAo3i6JYg4yDPy5BrZ3LVic1F2AFL4yf87d57KPkhYRRS3VexkN7MnovudjDieGANzFD",
  "key27": "2LuXexabVERbnKer372BfKKFauCaQGM7HnfajLdUUtuKbHQNYFhRcAyLKGB4Ao5D7pAj4VCpmiNrsv4ymTdMvKSZ",
  "key28": "2f2nt8WstYmCtfLQhMNt1E1WBzpE2u7uh37V2r7A6SdPAgZZZ3qdVgo9weygRB919fBHW6Qhp52vbX4aqcP4awHH",
  "key29": "5ksg91NyPaejj9xavAUgYUBPojwJoanFoWUKb3dCnb5EK4JtnQTKkTmjjyrrMMTRXTCkuK11f6vvkQWi5zAYkStt",
  "key30": "53cjyaxhMYNrWSHHUAMHW76QTs14WsWKsT9egUuknku98nphiE4kTS8VgjXpXQ9oZnbduPivtxaTovB4MWige3V6",
  "key31": "3DERkmG6bjjUEjyfjBvx4hEYZY9N7hQ231FupDkw7A3hfhuqGGwrEiyqsAxkZrLxb2wGqUwuYaujcgqpmD6J9UNa",
  "key32": "3APSuD7EqYw2nhHgckxuuG6vEu1GoaE5jFJtDXuw2sK7pKzp8FAkFXh4eXd8Sz6QG8rvHKk8vAnNTR61QZwmbWYy",
  "key33": "3jCk2WgT4cGscL35sYpQvfzrtemsNNXZWiiqHfwk95L5YFMFbwCPQb2wSe1LzYz96bHhZ4y5K1K6NALh9XgYgsKz",
  "key34": "4yAoAxX9mSnGGFnrusRBbtqWHSNQ9DDsDcJmtjx49o4XHJbZMobjTg9wAb7pkcokg7w8x38ZvJqmpEVFkaE4Q7hf",
  "key35": "2ENVCutKhvUydEA35WRTyPdjR3k7rCezJPeKH5k4DBoTrxYmXvypExCiypHxhUfgrxP9RqEEAS6ieumY7MdWLfBa",
  "key36": "3jYb696t7hvsaJD818BzLNCbTdu6oefB6eAD7ukfnubgaxkPdJXUHgxNXA63HpAwHyGsxzLYRJywk16AbzvgvxqV",
  "key37": "v5VUvcUbt8vJUMJmyrUBm9deeRLeNYvHANYzu7w8FdMkFZYdGzvQJGdyGN87a86Gcv7XDTHLFVEvj9yd1EhKcrk",
  "key38": "3EMYYShsWK1Jg2Z7G52PYDhystUdXeyzq42FqS1spKsbXbhHUCDTAaF1EGSrwtTWvdmiQ49WxGcFhnjKJBWocfmr",
  "key39": "2vXtt1C5gVY8MVg6NxwqNETxPBqojWxwNaybkEmN4HqZ6JtsUyLE4GFgawYrNiun4QjAnCofqeco4zxGzbkzFvx2",
  "key40": "4cdNRrfNmQndpnb1yDvuMRVb1xntCc221YQ2iC7aCJr4PgCcMnfyc1PqdCERc9MtTueDnj1askWZ1v3yRRuNeWes",
  "key41": "WcuxwZ3n1nyD9eJoqEzro8dQYHcHWfgQSjUQBFfjokLfr7oZ5oyWf8MqRATjRqfxjLRcMcBxm8hGRSLN87GDYCq",
  "key42": "55hp1KGUPAKwTYtLS98nEiskNTQFrswUtpiWstiU3BAugmM2UDD2WthgavLnQKe7tnTVmj1KwdKAwvn3sSS92Q7Z"
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
