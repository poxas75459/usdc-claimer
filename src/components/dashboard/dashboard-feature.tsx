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
    "5LjDziNChVh6swDqJuTKPeiNmugqk37wVFXSJcibjsAcJrAU6jvxqcfxuEHBznJFujNKnbcyw1fhwvLo2qeYMfKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzH1gg3cPMv6HudUe4JkF64j8XsRs2Je1HcDYqXfsbKYv9bvQRkA3dgb3kLjeAMzWiXjvYFNnsk1CtdiJSE5rm6",
  "key1": "3KFmbydKMuMY6AgxNCMR1VwAsPtBLVGNFNqrUXqLuLLe2DtdjN8YWJLyJQSUccjcNiLcnbmc5CTfmaz7vB5kzNxj",
  "key2": "2JXDeMK8ipoxEBHsJwVSdfwKCGRzQSpJLMkvoz574VT9jfTXRoKoCcmPjWTkSLN3d8Bvs1CsfAwQxfnzck5Dspag",
  "key3": "4czG4yXECrUT1WPW1TNGkD68Ge68MejcmB82ZKeAgzMSVdC6NqYLqXTpfsfoy2FGdf4zXLXx95AYbHHPcJMPdicR",
  "key4": "5hNBrfjWWjRXDxdr23vcMPdq1uDNyf2sFt3WJtZDt7ZXHPCuVX37yXs8ir5wbS3ohzLwaVPhgYY13tXp86Kzo4T5",
  "key5": "32xwP5eQxUhPQkNRjssQbk1e87qDBBoJBVxmQC2fFBzDHrGyKSvitLW4u5bM7CWcR8qBqyvFD3Bd3TpfcHmyCpyK",
  "key6": "2fZPTTbSaED6wHXoeHB2sMbvbXAdafdemFK2zhCJKfGX4dU9LAFbXRxSbUgZCqkcUDLT4kTwb5BpN2UwTZHYjYcV",
  "key7": "5YjWvLWoN524YhhuozsmiwPCCu1oRGpW14GaW5fjgRveDdJWrSrR5C1RHrBrJs1z1BwZxLpj5on8TSm4YGxxSseG",
  "key8": "37sjFiEe7RpQozY6P5JuC9XVfRLdBhaGpr8Hw5ndbTCWqT5ouGdGvoaaR5n99fL2hY3ppCG7XjZ9vX6qDnM72vUN",
  "key9": "2Jbd6cHrfdrjaeLpvfNgHnx11xZgYvweAnsKrQs5ECw384sjvbLEJuzwjzqyrjXHHFz7iuoD6MdKSq6Ly2Gkzf3k",
  "key10": "2KwbCR15HNHc5svtNWSpHm4eryhn6NP5PhcoMeekbGk6NpZ3gXbySePXc3AgBBsg8yMpXv4tr3YmhbMrzwkP4pft",
  "key11": "4134S4mUL9GLLcxbo5rL9Y4B7xQzTnyDiT5B1mvtJK1ESoiaNsS2rm3Pg7kC23MZTkTqssNBAKZDXfFADe54a3Qi",
  "key12": "2z8DeqPK2neDTyypbMrJD2AwhyK5ihWs3ie1QhocdifMSZPJyXUd4BY2cybCFrz5yXuFtrAFXChiz8t1ciHwhT86",
  "key13": "2LtQRE1HTNRWxMGPeMwnNWC7Fb9bc5Xba7sEm8UPe867MuHYQhDQzgW2Grbrodut3vsBz4fkvmdrncap6wRLZb5M",
  "key14": "25fVJcw9eirytVUCgrre63GT2WbSUGHpcq7HKTyvxXoW4BLATWs7sBGRQhLGB7qVwJ3s2Fy1sDWs8xRfHD6J2cJt",
  "key15": "65PJHqqJnpc2BA5atYev7WAs7td17tHdxJfrpUi3bmRZ5YgdCecfSp1XsaeidC9KwAVqqE1PCVQdijxF2RPbKBTG",
  "key16": "3a1rZ2WMx7nhRvrJJzgMdsPMmZ33azS5ZrmSF4himG8Spa6kghHPpkyUMRcKE1xotFb1rpUfwHZJJAuoqwF4Yzk5",
  "key17": "3up9C2hxdqpFs6oJTEvEFPj4PXxqDmnwD8vGc3c12vryQKyRs9tasU22gcBnkb9UqALrdwsToNdBUzqd4jBcFYqT",
  "key18": "3PNCWmMZVXKzj77ZDBiv5KzGwgCnrJeNovNQeSX1yYB12hY1cKSEUepoHwJNFxa2drnPgSGfnSXdU4V2xaRQ2Eo2",
  "key19": "4APSKUb4avhbMXLQTHTavdGqzGTjSQaQaUfWK1MKDc93kLT5zfZK7Y5sP1K9YhZBRUY6mnMZnHe7YsEvjQ4m5ME1",
  "key20": "2r2miEYth95YxEDEBYTLe6kGnm5JqNDZiXnY9gLuY73aeVTJTthZa6dX7TbiAPqh7eaUrtb7pBeNexb9RySHtwLR",
  "key21": "43uZRRFWS41hgu5JWGiEnwn3jhJy2cz9Du3tnX3UHd2JF4hjyESinYTvXAHVWiL4mwqwdx4cXQaQBs9jAZxEDhMw",
  "key22": "4bn8WuLGS9cSVnMByeF3ftNyj47v64N9J8s8WrVzxyWgoeqi8vJtpN3sVPQNJPvebHKCJ9YtS4UdxWVqXvqu9cpp",
  "key23": "3EExm9erYVGpUqtkx6EYAxwoznXD6HdyRaWRu3J3RMzVvULj7HaaiL4WPeGq2xpNFDHxEcbJt1K26JZgBiKEUv6e",
  "key24": "4RpKNxgR5zRPg9W9ySdMxjuCNn2VtLzetoPSpR38oYnRfm49CYKgZQTKWocnX7fRBhDe623QFiftdBp1c9Ph61pn",
  "key25": "5tCbHXU5KYcmg45WZuunswcMuLUKbhAazrVJGADifibMtfacoyKZYfFGu465CXWDPZT5FqX7KC6L8mT7yJZt8FoL",
  "key26": "hTk9kzPLgzBbyZcprnthZDo8jzKhPTGfex2g3tiRsTJNctYiRyJknPE6Z2A6JDbCw7o3atn5EZ2885BiETS4nXb",
  "key27": "5Mu6r5iLES2eDXzmcQE1fbTN7qwhsH7hz5Ba6u7nKYbtVWAxUZQZ7V2k1giPU9pPs8sy7C7ueJCXAAcdemaMfDuN",
  "key28": "FAYY827utFTGVzvvApKY9MjNhdWwXVwEpwEgQ5Ef6mQVSjWXGDL1w8Q9e99HmatD5Ed1UWJpdie6ujAzup6HeGD",
  "key29": "3d84gndd1Caova7dkyNyR8maeN4GpBjmpkAESfxVdJKdSzULzDq7Cg87xmo9bzLCWpBESH45YvDCMGTxJN7r2dV3",
  "key30": "3Ejoyb6Gt8W1H8wPVPEufF9drMWPsw61eoJN27dxngSiroJwW79URLLEqJUQCxabDqJzuzNki11KK3EsUxwrsHR7",
  "key31": "5NbJRbdaoByt7Q89mYFoVyg45fvMkytNpSr77A3hccpHkzR9UL1ZsMRjHezWR8CJmAc3D48BpCpXWjWDW7rjbteY",
  "key32": "5RC3jVGbQdwxR38eGyGHcXBfuGHg5dPQWtHRCzDZpciHHq8iskyNqn9AX323s6JvYSQWD34uNNruZnW4rATncnoP",
  "key33": "3CyNLt4FHrsPThT7zyDVMcStDCkoxZ9LKZ2AZWDVkyBXzqgHm8FPC6HdGnPoTDgWBD9rsPbCJ2gc5cRJD3eCDZfw",
  "key34": "4eCWZKHMRn3nKbhg6JurXC8isiBzBwaMfVzu5cBfhEwGkciFbsU98cVz5ixpKGqycZipLhz2n1tWHeESVseFfqLf",
  "key35": "3is9RT5KE44haxeYVNUJ5u8TiNmaCidoiwKfStjmJEGKdw1zg9CGkEmm9dLHBafoJ7yumXS4XPtU92AqCbAq7RSb",
  "key36": "4H7aC1KudtN9spwJPrhT5VNUw1rCkXE7n9J6V852s8pPeuTYNrx44hqaiCdpyeumbFh7UhwkgtDr9P1cJGiSgRHe",
  "key37": "5gNJpYDhTtjd7QjMVTqKE41RfFThK1D6RR2WPAG3nv5A2RctJuj2MrwkgAoB9Sf5iNokBU9R8W1vwRy2ZDCT7VYY",
  "key38": "5yJku6T5NkfsaMmfMgNujQ5h5c8JuLb6dQazNRXzmE6wpiA8NaSj6ejT3bveMYVC5jkFeoJcUuK5wkw3GyexdjGH",
  "key39": "37zFR7U8yE9y6WQ2D1iWeQJgTieEmyF3moFiu4neGS75TAG4WuS6qfQWapHh7DE3T33h2FF7vE6rv6fvteGEigBT",
  "key40": "25UmoRc1sfEWvUXpWBSG4yzRFVkpWtnn22jmTmW4zmjtRSfzTepnoiPfzK4X2cvgdQ6XzcPZwqQnRDKd2VJLDPAh"
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
