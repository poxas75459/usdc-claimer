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
    "b1CJFQW2ZVsMfgd1v3cE4R2AEj99Q4uHnEe9EpFY3e8qnjUvN8bNVZ7mvvDn1yGuZJFSLmnuXva99LKkFy3MvuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gd83K9MUTALfcedy96wXmJuE2DbgYk1RV1k499QayKnvC7RfHo3UR1MXe5CiLL9cb7g8DTJ3HGikwmHYxBrjvt1",
  "key1": "ZaDHdJDQgREW8wy16mGnnxNbDtmPpKXpYmzBT3LuvyZSxLLjZfu2bmsX3dek4o7LGth9dxwVq6Z4yFkYHVqT9Jf",
  "key2": "4PEKfvEuvrpAksQ8oFSMZns1nXNAVpTGS3rr1sQr4vRhYCxeyDRNu1paw7KicTdsrhWWTCNB26Ef3vTho3h4v572",
  "key3": "HVDdC2jBmkfgyN72UUzFo1yi6dkYfaATCfPuUDThmmyX3ykEgHTXLtkq8ixznLRG6WFrcjFxdijdvMGqGekgk4x",
  "key4": "5LFutzZfHLY33gUEkRHr5ohfYsSDwRzhJLGpMA3AnuvJtmdBdDuzFZHyaRifG7G38Y42JD1LoNPKr6omGyyR4BRY",
  "key5": "4MkuBYGaoX54yDpJ2Nd5bF7TTjtR6uY9Bp6v4nhooQ18qTLLj8vhBT6UXUtZRsVYhicFN17UFoEikNA74bBUWN2K",
  "key6": "5WAcKL5ppaNMnSajEt56BMmvHDwUrN9aQGc4HaEv3mKogyMdVgbGjupQ66cv21gLMBwqfxXnjS2TUBL9gPK3kiRp",
  "key7": "jVxUMAgS5yeEprE9F2gc5QjRiAWTRSaEqLUig9TLNZAyHj5Gq7ay5PUyPk62WPp5YHLdJrnovpvC6hXXGWiqdMf",
  "key8": "5e9udM3FHYAKkGxMLBMCzWW1xiVNUKbSiw6cejoFVLjoGKbpVwK6Pjroz3Kpb1ebgsV8WQUEfLSYCXN1PqGxJRHf",
  "key9": "57arGmZcQW3xTpRmuZq4FWTBXF6gmUPvRpKhf38aUKFVb5SeVw893jKxLZWKya6X6ixcgwQ3nGAk6KEiNV6wG1df",
  "key10": "5S1kQcLnEbtFVSGVfrnhE1bBFngwvKUDM3rMCsrT6tpHiyMLVYyCNNHfNENzpn8ndvxEidjVetbmyuwAuER9Abb7",
  "key11": "3e7fwwRAM5Z6XSpkUAn3f4Aoe51ijRwD4WF4YcXQ7YzU4PLieVqLHjeVPtDNuKXhNYshMFE4ZxhHr2jUHuzfukEn",
  "key12": "3YneZGd4RUH31Vu6dFRrQ9W76yKCufbdNLED611uavhjX9FcNTqjuzBoY5cEB2G1nWFSHddd9BQ55JHmjY6Hb1YU",
  "key13": "pkPKHnFN3mtL4SedEbTSkCn2HDBJriLEegQ9LU6Vfn9ysiEzvb4RyVps2tmXKy2VJuifcrvCnsScxMFQeqbufAK",
  "key14": "VYMLPueMWV781NG27R9Emy11WEXaCrsw1TCuTcfc4qDtpr4iAeGBkQUu9EDi5GkbZbX6438BbC5WvtTTtx9s1Sj",
  "key15": "4U5U3SHqUN5uUVwGj8J3Bdyi8MaEks8MSG1dwbdwbmK3sF81ssfJeakJhM6ZNVX5kguq8aNDAnAzWJAysp2E5qHW",
  "key16": "2JWrQYV44E74GAf7snZyzXnMbDMgRtHUeeiMNV4CrU2HTyph3JrDFcU6CV8x9wVDqNUB54Ao4J6ReryKSSF7vvar",
  "key17": "atbbCQSrJmLvKpjYccv2bMZYBsemCamCrKmaM6VMj6R9JrT7CcMBkNZ69k2A6oAxH26cXhSxqVJXBrofpzaj2nZ",
  "key18": "3vuJbJ72YPb4ZvGyjVzP3oYu4aMAHueM6Ec497r16AJkQ9tvZkeQmj93SgJ6za9vAgLoe6NEkcBR8xqVFusgtvMW",
  "key19": "4NxPWKR2cMCZTBh3jPJeihUMfBMVaCeHa9RJ1bH4fNAHELYFYZNDyE2cEe5uxCqvkTuW7hfk8QBgVJ6wEqvgpFqJ",
  "key20": "3SPsvSsrCDbMowemxtAqRr6ToBJLjpBunwANE8N2nhckNvv8QJwRVwXQ9v26phYpNgpQdfkTzBZbQxtV3TrBrZMX",
  "key21": "3LycL89ygfe3CFXVw2s418gHL1c1Kkd7Z9exwwicqjoaRCHqE7fAnbdvc5NHugAfcMsSZxRZJoBkJYxFcaXrfQDN",
  "key22": "3RSWyH2DnrsPcuzJdi5uMZ5NtgTiVF8FBBmgGqtyConn8RKKRPVexpqG5N6FeAWCaGtjFX2yd7zUaqYEDMACw3zn",
  "key23": "CvsCtmCXEa4JAn19Hcj7drVxi9XEEtfxBdCZE6UYg46c9vbmcFxMXX3Fy2RFUVZd7kvoM9Ytw4ETY2KNLNxtd56",
  "key24": "4HygN1gfMdxT8kkPwYrvE8jCR91EoyEVntikjf9zEgPhw6XzfdtAZEnapkYgXcC3aW6G7PN3MgeDafuhFVcaBwDg",
  "key25": "4GHNeXmVnRoHu94EiQEqENC29ehbbaS7ry6rHWM37oxRRGM4iyTCDkB6xHCxzmhwcEchY1fRM7dx5RVCzT9xHZyG",
  "key26": "227G3rrwhz4tT7qmb2PZTh1W5zk81FAtqkKQt4YHrvrxVxxKmUnx7XwnBjaQHnM4duFFAxZwTsQX77JN5PkWmXCB",
  "key27": "33S7sfm3tEKRyCj1TVwmiTwjNSxp99BUFEckyaNFPg1W9FyCe864GmAyxpGrSrVhBVR81UoSCgGKQPp88socEE5t",
  "key28": "2ALnLQkcRu5UBoVkdSK679Ytr1VXFdVSKKqrk6KUoWSTaRRD4RpYg66v3FVBkaQb48hNoAtk3BsQERgdidQQ7hG8",
  "key29": "3MmaFVrGHQKRwWs8n7QEisGdpic36FXfpvmWroxMbNwfyFfGENBeNNQN26hW2BWaaUNShPK5gT7DgcTEG1cb3pbH",
  "key30": "22rpgcZUUwGMr5FrMuDxY4QBpcsU5VPSnXMtiPwc4GJrTx55PmJbtZ7thEpSzeiTDyPrkSKPR62sfZzxByYQhiCk",
  "key31": "5Mh7Aj8TeMLREUzKzUzXDyBf28NKbx1TrTJFjz6vUiYwe43vtHyTyeiQr4YSjXXaWiTTVVxxaSk2gzPknhJEybdW",
  "key32": "3nHoNhDunNaj4s5weauDLx3FFDX8nTLE6p3RmsZaja6jKr79RjVbWcbUwr2t3dyiybje5wPmJEGM19UtShhcmH2d",
  "key33": "22iYWB9P4GDVdphqBpQuN9C31Z8jd7q3JaZhdAejsTRLXXZTeKqyN47vKKfJq3d4guJzTR8J81pVB36e9R9UEhQf",
  "key34": "5v8jGrpXEPtmCMHGks97Uat9aanEc6UdAev2bHLaU2QdcHwJzMZNr8VnMBkEbfrGQ5jQ4fh8r7XbsW2byw3hstrD",
  "key35": "3cT72kng74u9Q93zX9pvLZUqsiTeouZKZqFLxLZyHaNoPzpWmYp3EEu4VWMZNVsCbCgNoQa2Vih2jUubepAVvNj7",
  "key36": "2qgt26ra8Dcn439j1Vcp3FqCKJsf6o7yiAfadw6PUdXU1j8mvK9rmr5uheSSDrWdW4W2v68ijL9rCMseadVMpv3o",
  "key37": "52DgSms3yfSZy2cHDyUxmRT1E3X5v1cH6osezFGR8vQ9Sopuv6vB4qeFFXvKYp8bdA895md76xVaji38WSUHE3Ev",
  "key38": "3K39qF7ex15nY4K3T29jYSNCEBuucAbhb6pPtUm7SWfgk7jTskynZCRFoYVRfUT4tcXo8SvpujXKuUDmnv31FXFF",
  "key39": "3X8kyVDsgFLJ5SwBPAUnGYcXcrzoMGBSopcv6UuwJBio73VqXWycuFcvXYEDmQnoN1r4yUSXWnzSmqvzVD8aYKiM",
  "key40": "FxRYC2xaAdy7fwScUs6kqsLF6vmjvuHcqyJSBAcFjBMDnQZQtZnyGBNQs25ARqwQnWcaUKuoMPJUV1PYQBiujft",
  "key41": "314hRqhP4MR4uKCVxanF4uci93rThiiZwETM1v3SMQ6kUSYWVZ2qsEViWmrzJHWJwTFyE1mkdGhApTfRoSfG11u9",
  "key42": "qAHRa1qj3dNwb4dVwkvzPKnci6xhxiZnsMcoHABgRFnbGyWbZUnE6HJ27AaUZj73DfiE1MBex8hK2vSeHm3gUW1"
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
