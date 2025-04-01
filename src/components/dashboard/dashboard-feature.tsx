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
    "2pW9GUUMWfATAXdK1jRpx464RLzy9KuxsstTXLZ64rbnZ2VMunqQA5iD2Zqr4DhYFVDfZVj6ifVVX6j13CoMiGAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6419ahXgukVQbyDEyQWLTLh35kLarBVs2TtvZkXMn914jA2v23MkdfpzdhcjeziD8ySTEDRYu33kyriSkBsVKG",
  "key1": "4YvqBTNa1LCFiS4or6rouMiUXVPWsn9NP94UQNsN6cWxKgBLgNoXXCP36SV2XJogk5nNvGmAZxJiZgg3Bu2NrbjH",
  "key2": "287vLHRWEKf5unct9NKvjrEcM3JmvwHkoV6gL551FdJg5vD8PnN9LJQqKGAV8aVjS6o8XikDpucxF5uK2waxpDi8",
  "key3": "2vTateSqosS948GwijQHEpJX1Xv4b9L8XCTGsWqqJxKPjr3NNEFNACxC7arrZcHjBe51VhLewd4wHhvJsNKnQcuR",
  "key4": "2piDifU389Q2S54bKoHkepsS7Uh6D35zKBZevD67TF6iwWhbLdjGxiwDpLmuCdKHNsYsuYF3LFSUw7qTA7zvnLXk",
  "key5": "5RSU7ukZEmtdZkto6cg9sUaLj7DDAWGACx9x2WDUDpihvEvmQTfBnwtozinWtk78pbbUVArpVWZZoP9kFLbB8TnN",
  "key6": "5TnVR5cdqhrKrbf1AGeqr1TRzdoKrZNBHtB9pwaVXTLqd8RTarqY9DK7SSCJ79uFQfwhZRFesJ9Hth3xhxY5a3p",
  "key7": "2yFVKfJ6Qg2N65yWBk3FfUaWCkDACLGfzLekjBracE4Jg4oRqs6svpnFNvrwFTbHCaoq6Em9Yy4pDRQv7ATJ8Lsx",
  "key8": "pLruGBDuEFuF1tbnQmjf1GaKDzdcgLt3Mvc7WyCtyHb2SJgsHmnNPyHNG9kwWbU4chiDJizK2NsSPv4nqzSPRNd",
  "key9": "4wRFBzTvXne2xEQRwUiLDgh3AS56Cvs4t8wWwjKT2K6cU9nhq2MGNBg4KQFsxDBQJfKcQEYxBS7aMhG1hcFpdzbX",
  "key10": "QZJztzrgddS9ZEkZji6yKzx1b1bfW2m5tDETj6RU4gCGf2Dvp5vofgfYB5YXbMyrQajV7V9fVWnC7ThRWBzik93",
  "key11": "5NA3rS3BBF65MjFnwvGZyRfg7j7fzsvA9YYemnWwfZVyddA3GGS5mx2mkApTBSwk6o7eMJoaRCwmdZwNjKhUVdZY",
  "key12": "3ULcmMni778R2FpPXEGAU9Ncb7W31LexyEEQ9jL8o3NUq4QQESUHiAdjX1VR4uN2hm68189USrwXhVpCW4gzii1H",
  "key13": "4Bmt4cNF8KytwQpUZ9DB6kmKicnX4Y2zUCCmuNtALwGzb1HY92FAXFbPG5rDQmw8Wsj8eovLfFt5T2qnRKp7Chr",
  "key14": "2hLeXPgrm9NNM71QipRVRD9uiu53yeCwoAkDZMzpRzQAh63rNW5V8nNiCB75o23qTyS3ar4r9KabE1o5JL4LoWFC",
  "key15": "4PMoypwDRFRNDzvwzaDWvvU3dF9NxmnfpZFsHnpP3BaSWEUsxFuVJ6m8ng9t6Q4KDcxcaPfCZ8jTVnSA5pABVykL",
  "key16": "4sDGPecNtfxGEyJa6q3EF48GoSii5hiTmsQMZdr8CquhTqG8PfQoQ3skPFtjhPojG2231Jv2ggjmCG5vKUAW5DY7",
  "key17": "2XGaUiBa4cCuPhVFC3juo9n4Di5hRRRWAQpAQVHqshqYN5f1fLVVRm1VF7aCWBvCPs9iuiGHAgTt1E4pvRM3yDvr",
  "key18": "37abLD9gjHU4H7JWdRgjvUGtZb2Bf63Sxn8JhMaujQBM95QhnU1QQjaMZFiAftbRbqB5ign94jb3g37pCx2cbfM7",
  "key19": "56s9g3CQxSd6XNQcKWaKoegoBq4RQCuDN5s21bSBXPpiaoXSGnY5BmRJty69pf2a7fv4PaxB8gq7YEBbPVNAyXCS",
  "key20": "1TTgfDeLkQJ16f2PqzS6t57kJA2gZvn94SPZ6GbDmZvw3oiMCpLheainv5AGmTbumB4ikR2Rj954WnaX7efuy9H",
  "key21": "32Bw3DSXCAQ6vMkrMUUCafYc6LTCzxCnXv4hckhBiYKgtxq1BpwJXsPzkJwDNYpqmqa9oyDv33gCuqWwzF23Mvtq",
  "key22": "2TbrPEcw93KDvo8mShfbR1JRmNVyrarYmLZfiSnsSnsDBkyb9p4pN2wvJsaQTkxrgm6hwAiM2mNWS9HCtjkLTUAN",
  "key23": "2FzmiTMTbojEt24xUPGr5jZfA5HiUHx4FWharaUWf1VDF3u63HMvSWAk4KEzJNrgEm2iBwBRsBihjZCwP9UPb6Vg",
  "key24": "5SKJjo5h7v3kCYMatKDKRP7YU49UUVNVzC7N8pR7LAVaKw3eLdXpvpvKK5fJnXRYbFi8wFgTyG94T9fJxojbWFRw",
  "key25": "4uREpZM1Qbf1PB78edbT8QgQJxqksc47RdcWoGUtSpKGeNhdr5FHWpjRWD2Q2S3w3MkLBVv6NeZ8E25xQoFM88ms",
  "key26": "5K9noxN8nwAi4KKQxX44TrUyKu7iRDndJUprsUjsFqH4cdZxM94u8C6gaDYvTE4tv68zCf7vetiCF7tAPn7k9s9g",
  "key27": "557LSH6BU72P5pC1SiDazfsbupJkc1vxZSv5wBzenCy6PuQYbLUvFwoY1nj1bQYzxaBZ8aKU6N3aPRdjj2sHUe5r",
  "key28": "72qxxrq3jz4Vom67smNBwNsGoYXvYdZg5kGfger67agSPDQyWytuKMiYo6ZjTtQURzQvtrJWJotqw4rnsL1Koey",
  "key29": "2xpZjUgySJM3Ab1PUnsw8RnKevRHAGPxLqntL7h1vnD9AYWmyv66GkjmVev6E5R2CNyPYaAbJ2TNBEZEsFVypnQ5",
  "key30": "4kJS4PP9vjy2WtFjJjGHDGPUDtt8VNoxwRnPtN2uQWHEvXx2oPkRsBjti85XbxUyWRmbqUoEiVKtQPwFq2uqMvnu",
  "key31": "57VPxc1geRDiS4uzf4W94jvMxfGCbQmiBaByWUKYu4gPBUbbGSd9zEzqGiTBNyS42w4qRjbryqufJTdCFTTcZEpk",
  "key32": "32D5BTiDp1EqxQ44h5cUr3GsQqdQzDri96ASodcNzCDN5wfeWoNQfoxZSV6onkosi4C7dspNj1uWnuhKH8ZTUMhh",
  "key33": "33yKSFXyWi9K5sj9mUf4WuMHmaefRtaHntByQBGduLqyLNsJVEamsEMNvRa9eyNEwSDx6CjknPrakbs1Wv8Xvzyk",
  "key34": "4826jcJSQzPs4nVG6GRWQNnG2QicS7pbKo8kBpwaGFCgR34eqwVd5qLEWCyBipjLv4WzNEn8XKYbJqaU5RENoqFo",
  "key35": "2s7DwbMcEo6Vxx77V2t75byzHf3pswsycCfeJJepmMuYUeJDGnor7ArqV17HGqWo7p4uR3XxreGJUY6QHT4r1Lyo",
  "key36": "mjA5zBRZ1wNafH8agP7YqfsH149muZFc2p4LaEL5hEeA1NS9snpMNPa97yd4YRZU5UYYLLudgtCPd2tNV2pSxHt",
  "key37": "3sjqbSYUoufkr1KRN7VDdqi28pbu8fSfwD1xscAEcUftfwp9m1v5wVxqm3yCZFwGx14yoSZvzeberWscdkqZeBEu",
  "key38": "4sjhfKFSGWfvhL3uKpJjnLJXXBGBmgQDEi5azR9k6zZHbMpuvx9PTfF8qC9DktVi15PNCgy7S9whh72Xdeiqetim",
  "key39": "JfZfyNheRySzESLqRzHp3HjHi7nDJ9yFEfveTAWwCECoAw7RNeqNCoDz6984mk4BiPX7kwo6mQJa3Tfq5hkS5kv",
  "key40": "64dr1zmDd1pVB3aouFxBwaCoTxnd2LibMGBR7RnbZvynRSCt16SN26nScCkyKzubHrKfFQbtjAJ5oTpsfY8pCC7D",
  "key41": "4Hwxxe9z2XW3mVGgjd73YcfCwv1ppAJNdcssE73K73dnq3z5Enk4c1PbVjEbY1YgKrrKM2WWdEvx46FXLFLvhZkm",
  "key42": "62Bw49VQzm1xXhv3J6AM8bZKB1GnkowYKrmmGaTVj1tBsHMmyAjuJkY39U1Rvb5dYVnBJg8csMBQD8SQDNgtbgGp",
  "key43": "23FFtURFMQZTgi7kgUFYuTKr84jw3JxKCWYLcGH2VHFRDSZU6cvJrdsbgCdELcmkFD4zuAmwB7JJqXXoUAwZALd3",
  "key44": "3VMWbb9qmok1kKdFdsNugXNKQdrr7WWgBHzBg117A3ZywRJ4HL8ibd8ScX8QGwchYJZXZZ2vzmwYHPFHofoCy2Az",
  "key45": "2APmS75YQGGD6tJzSfpFhUopyeykPNgmtSnTUjn8Bdn73UXR9Fo1SLn2nBpYZVRxwnj62rmcxiKtX3sqcD5jCvNT",
  "key46": "3RciSh3e5mAy7oYh86Np6Nefoauv92GWmNpnGqrej2c74zohUuhaAW6uGgfBAaqzH76FEisK7WE7hnDTHEx3QPAG",
  "key47": "26D87EAFenLei51UoLubthmxmssHatCLZjpccFVpz7kEQZgiPViJoFA1MQXvG9TRHKHvtM133rFNWAXAPSoffDYJ",
  "key48": "4FwfHCFziNkCtJvTkPekp5AeRkLn3QnF8Y7Uef5AzUc5t6Ehnt8Qv3RNDmqu2Z5EmBgBpWQvJM3zqVDUvRU6KMJY"
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
