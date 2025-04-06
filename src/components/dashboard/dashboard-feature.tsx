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
    "2H55rGb9WHiKCAQGRR6Bv6Ka9z4tLgpKKCgssQxfDbkTkS33gjkPyKjzPVyGAwSsnSj3og84LN7siKAyFDXKFQVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFuXFUdgxYuNLmUVHrVbiyKWAoJT4aQarbvdXr3d1FkTy4TAoX4SbwuvRRnii3Gr7rnX15BFwWMzqDo2mFdzhYu",
  "key1": "3Xfw4xD41VqcPaSpi8gjQrBxFrkPLqFHFmw6gvW4Fa1aCBvnjp4m3hUfmw9hZY8fREAiLbCRRxhhMHhKkBFLucZf",
  "key2": "4D6KYnZLcKt3wnfEhC1gEMTeREgKiCVw4ztcyzVQDFetLtCtkXmnHYBRSSrr7LeJ7nxNdU78hWS5J9XQNy8hjWxu",
  "key3": "2kkn5P6VWGzbu6haAgHXTRpBpW5LmhTERjzR7nyXnsqAEx1kps7JzbyWdn78GMRi11AFWWb22vNLUrXwPgshJviQ",
  "key4": "4FcdCSTdAsjHPDBuCbnEHRZ4jQMFmK8agUuwru2a6wNi26qDToMTUN5We2LatjbEeLGkAbvEGbcfbGmmLEELbnvq",
  "key5": "ZNDChECVFPs7ciRpF19N4ESfcx6s5xsQW765fxGKpxsrniYLH14i1BwUu54b6cjZET5NCj26BCkLMUe6LEiv5vD",
  "key6": "BiWHNXGQj5PwTNENssVFszNJqHik4zrbSrcEGYBhJrvmY5Pa5noto9fr8CVTqTV3mqftuarzirt2oTvC3pVLoe9",
  "key7": "5JR3WKeXDSHubLMvNopbG3BvzZofa4M4vN6uhTZKMKMiotFy5CaC3eu1zXkoTASW3isXfk7eNpVuwL6AmUbwfNDk",
  "key8": "3jbiPwDvkVQ5gio5CwLDC8A3u67NfLNi7DMoXZs3gL3r4Rge5G4S5oWkeUA8m27EymQTyQg751bUrZBwpRjJTF18",
  "key9": "51FyeeQQLkuDjHsn76cF3k6VMFWdZUj74s2GL3GBRBvShqaUmhgEuHGFHYrfJyErSMeoSZ7a6zcMzrfwNpbz7v7F",
  "key10": "aC4ov2SVMC1RfzUxpCfkbx8X2CaVpTFEPuE7Z1E3Ri3qAQsyiBQEMk7wTfVrhj6cKZeS2Dt2wAThW4qT34BL9nS",
  "key11": "5hdjH57VWh2vnjm3YNbfmJd62HG4Ksdy3Q1q1AC3oW8kXn5KLAUaVSiWGmwRv711R1ghBnjaGaHPEEDnZxPKCyZz",
  "key12": "2iaXtkoxZowBHGdZD6cQgqS1qwjCuK1twWDo1sq72uYUjSZoY9VPXhrm656xd88EhE68WZGUTChovt4SHwy561KU",
  "key13": "59GCiaMY7GxZ22ThCEhrgnBiXJcFGGW2zFL5htWhDTMzDqEbnKXd3qQDfZnywSUU8x7MKNUdLJajDMSRGx2Mychv",
  "key14": "4nmvwK1vdUuqhB7ZbE6RA9jfHtcA3EU5DvAJQBxQXFveCtf7BJpQQ28iEkum5SuxTJRKMBvqFmteNPb1b5dAeVzB",
  "key15": "28CptpQ387PLUCU3vcjC9wNkMbmSBYmLmT2mh3dNTBfHUTxxvakRzHQFr6AM7GBSQDAD6mwS3M4szVQKUxfLguC5",
  "key16": "4hTfj4gQe74hhLLwZVgf6ErX3zhgpm7qSqytGPCDH7PN3uD4VCcgTPWdtMhB5ES9Hga7hpMrr6E7N6chF9dK3AW3",
  "key17": "1Cg2zKwvNC93vzXqkh7PtL9yqWLnBjPDZfpHxPqnoNkp2tekTGrwpjGQzMgzsBZ1wbLuxBFsYPSqmSLEtQW2cwi",
  "key18": "2QfmjsftdgixZcFzqnAYoRf8iD8CcN2iuvq1Wvm8ENSjPgZgZsEK4evjRRHxkTLSS8rjuU5kUHKXxtic6Tmz9PV9",
  "key19": "4XPrNjFEAodhJu644fFQnyKDxDVdVpsNEx4cZ1bTvmqFGWm2XyQ5tEwhN19x7evMwoUY6U24wHSyjzgYuvvJLUVM",
  "key20": "3ZwqQTAqUrMKoWdm7sXPvyabif8Pxx1Nu7mjoXd8GFNocZdDK6W1Wxz9D9bmwxrpbHvRap1kmqqmXKboRLXFUKtN",
  "key21": "59qf3WsiB2kbpS81MjQQyKmJp3pTFfQubZLbs7McUB8kzv5kzdcBRP78kdWGdhrHWFtPUGiegaH96S61uFcY2fAN",
  "key22": "57BjLGqKTt3y7zzQnzL3mvbwGBVSmRRftS3XUr5WMEaA7Xg1Nrc2jVovmAChCtLyBeLWshsNmPbKYPSYC5m9Fdnm",
  "key23": "3pfuEPEqc7mNesomuMp1M2zCDtYdoDF636aaXerDw2FjR8WKrrm9TUWeexdVJqSkAeV5aY8D3L5Y7own8UG2ppU1",
  "key24": "49NnGHvyziHTdbN9EtNBhSVMgoz6H2cT6CVaDNWd1kpB9GVEbJEsmhyP4hhsF3oQHoYbWhuewAwQn32MtHCvjz4W",
  "key25": "2tDe7gB9iTckgpyCPyVqSBVMDrDWvGVyAYPKSW5PttzJrMHiv4DGnNveU1ZR7aR95teNYNV8PJWaMxFMnvqBH8Cz",
  "key26": "4qCD9JQgvgc7aaLTrJ169LNxUb9tKgjTvwK91G9Suvu963tNaPBinqQePszXiTaJdQWyw3oGQuNnsK5s8WZEMLi8",
  "key27": "4AGd9oqksQztVDWFLRr4wkEkcvuaNVDf635iN7SBgBknKCxEz3YecxYdzqSk9QVgXxiC751TgYhzDdrysnJvnmeK",
  "key28": "3pfNU6L5YVAwcYWDkRKUksPTnbv7J9rxeV2pzQAGKJoEKBrrwm6JKFe4EG6G8wcpRZyttp4vr1xrY7AQTsAV3kZ7",
  "key29": "5tyQkp7Pt5rGDaEbQPXnZzBRxQ5whronV11ipEWHVjDHqCekdxVDMAaSgLMyrjhvEZEqz4yXD7GshVdeE7mK6pVZ",
  "key30": "3QHn7BdwrZYHKy5MGuQuRzhKQsnkStP1jdHZZdHEEXio5tSiojBpLkgW7nz1HDEYumG6SDoYyseSbwyEcTgbcEey",
  "key31": "4TAhC7QB5SiCjGnhZkwFV824P2WM7Ax6d71T28UVvAfBUd8oLNPoxwdoYmseCPPK4qsnTGk9MoAG1Tuyfqhnd1di",
  "key32": "5aW4S3TsfNtc3DrztcnW6bYjAu2CYYmSo8cFgWDJzdgZA5SzPKPbHtCbcTkF8utm4T5j3S1DdpWxXipBSf1KBcd1",
  "key33": "2W56WiK5uivnPVgfUP9bfTMTXByR25ky13vFhR5aeWF2uYzfeoQ8cgkWda8J4wVFug7mWpPjkXpr1m7UK3TkL2T1",
  "key34": "31PkTwqSEVP7n4tULqFhmNdgYF31TeYYcxMU4Ua4mXYeEEbjNgHXSLVeJQ1sPDkyzp6fabaH92S4QEdwo9cUFY1t",
  "key35": "5dyATVs6ygXKquExQcHciD22XVKn5qa8W1cfiFvsf1oBAdXHqXxmpb4dqFkge9bgndTN85kDsrQZHdtJFiju4JL4",
  "key36": "2HWiqfZP54mBPYeg9DjFZpb9tEXEuoanoeGMACBB8KeYR2YLJrk4jAHrUeBWT6j2QU6jtonGCrVoi9X4ZwE9esUa",
  "key37": "c75uMh85EjmjiuQbieDhK5NCnKXkYKfayz49girfQzjKW8GCWBPjbwrbM894c5ocT8zqhWA34CSyHjoCebu7a4D",
  "key38": "5HkKkXiCwBTtYWs7JuSATJ6iEnirEiZQvD9pF6nxXKUaSkfGoMYqHRiKpqZpj8u3ne2UgRgTJPUv5xUmnGBp9Thf",
  "key39": "2ikXuMSbQio3pS4dw3eL3nQHhguRWBxwR1txSEERwJJRjqwY6dYJwv8ChNPyErc8j8UghkUCjvDEbMchh9eA9iED",
  "key40": "4TdFejHtS9YGE4on5NhFavLpVpT7KBjvnV1WCbwAac4NmaAEudt1BGMwjCZnDuJVP2RnXkXX6ngyT2bRSEytGVGL"
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
