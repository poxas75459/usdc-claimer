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
    "4Zu8XahLkVHFcCLAvjgZq7pZWjGcJUjPzVN6iSzL5JGPkAMNAHJ1WKo3ZxL1P7JAXBy2j6qFaSreXiVwvoyJiiUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGx8N4vZr37BRXH3KpehWnQE8o8fk1Kj82z6CYbfxH2k8oCmuJoo4dGErv5GxzkRKN5jH84D5BivNM7q9mSZp7t",
  "key1": "645HRAB1GNG1oVS9TYk14GLVf4rGVAhahWDTFUTtLQdc1hLrMn6JiSTiHyXRkLFjdUahkHPNwvnsLYgcfETzbuWC",
  "key2": "ot3d9dud71ZEsg6wwnidGJtnxdoDpahnzpNAyVNRDgNzkiWrUh5awDbbu14YWuKHSMR7ZyhXJZ3xr4ac5FA5sRf",
  "key3": "4UrmawRgpk9gxMvviUp5dSUHu3HfQLNS8oNnpQwaYVLxzf1yCyFupR2UCzTbYnpCk6CHHcBWRAixRwQcXR8pEyrP",
  "key4": "3RmQUiVWuJqADLWkePu6ZZRFGnoad8WRf9THsmLh5hT1dn691bgU9RtTL4FezSsqzHbno2AQLuoyP1eSbjsFkcWP",
  "key5": "3q1EXE5KMFWA5C5JoU7nuBdbwu8v2qpC7ndALyWwVTQPHLNjm2VLT7MqJSWeU48KyXJAmbikKbhpLeGGcta5QPVE",
  "key6": "2MoCKEJCiduxXy5V4XqpD7pE3imVwYX7TQkuEKGdWPr58ZDgtqVVumChuWkDy8XM46NcezocZXiRRLtegpAkVkLh",
  "key7": "3gSoQPJXXV5jJZCsVyEcJXAzJyK8uWkQ2sRQosPufCXeEDfV3rfydSWou1aoh74uCR15tjKtw9sxiiCoouHiya5T",
  "key8": "4Gzis4ahmzEQargB5u5KXbQKDoX1naePospDK3oCyU8K2oFDeU6ewRG9Haix5xsdC6GKJHXwsqgnVFC5ewDpcnWN",
  "key9": "3e8CPVEXMgLK5bi4rEuzc7e9GqhZAfHVVT2fgqbLa8kxxu6okhxGqk78QV2z1ynFGL6NMkeh9PXw4RaUf342eYRW",
  "key10": "5BipJe32qnRgiQ5vT7wV8KGqwQenEA1jMfQMtDsptvD3y1D4ay8tSPcJTasagC1XHLt2Gv5vih6d72R5QdHVWtc1",
  "key11": "5Koh6BoAk79ozjcNTY3uuWC7e6roGHRxT68EriVi1Kz91SWmnWNRnbg6B2HMdkShvRcvDPh4pKzX227ornJRv7GU",
  "key12": "KZ9mTG9ttBnS1sg73PWfLMetZuKcoVbdzVy4kEYYaFQcXPRS3pYoFgpbe9zPV7DJmncseo34FBZAF4jPifDckWA",
  "key13": "2RZyvGu7Anpv6uCUXurjL5v7HG1eLDNpsg2kKQ6xt5iPrhZY77HKPQ3GoGxSHTFMJckrgGLiWETCgLGRpUy1ifLd",
  "key14": "3gtrpqYpKpLt6nk9iY4sz27xUTKWYqVWvoKVC4bg8hgxSSzJP59pMWY2kzA5iVMemKAY7xMTc7oYrRKSKQh6Yc93",
  "key15": "3zEPSCaHDjogwakj3k2tv7UUYCj2oh1WWtWWZccPqunGHKiJqAScgvBUmshWePCm2tAxDVsQkKHYCKwHxBJc51pj",
  "key16": "2U5KxZeTDpQVqaSexZH7CJPyfFeTi5eLCXDyCJ4MJtCPCTUJYJX55JhuDDvuvefp2XMNehNHLbDjDMyhEXta9W1d",
  "key17": "3PRoBhPw9Fzkp5detxQcCbcPU4i1iqeZfy2H17Xkxefg6yHQ2kmfQP8Q5uzwd2Qqum2wyCvMKjQZea1eryWCtSsZ",
  "key18": "uCzV4h7zNRwTxRDbH8NiYmchHsmLHTGX1nD94SsqEatv96ipvqMmQA4RkZwEm9fgewEp4JopEx8aAWVUTmhYpZw",
  "key19": "ymURWrGTAv7WYUsu9avgzeKwev5aZKjA1r2VAwR5d11LopNKUP2oSg8bwBmzaRnsmbjPzuiLevRQFSVMvPZisUo",
  "key20": "5JUSHG9ymK4UHCgmsU443Xs8gmsgzifLV92Kn5W7xvwgMAbRgKVc2QSo8DMj5aTbK6tZvCCeEaG6zkCBJFUP3k81",
  "key21": "4KEMGDT1TbLxGRtx4oRwfL8dZTyihbCmiaGRNrzpDPdaZNgyBeMN7aNeEc7DALgUiH32Q7uoQtpAz3J1gd2mhVRT",
  "key22": "XN3rPU5MmYhXZi53gugoWo2dFyUdu8CXp9qSdpa7AmqrmsYgVmhmMNY1WSaCFLE1UY7wZ38ELjze5F1zzsa4BMq",
  "key23": "5mdvi5f3ud8j12wk7cyHEKAfsVaSP5csxKbUdGwo2pUYDFDPZTEdy2k2VwFavUXqGTuL3hT5kfy752UPmkeaDfi7",
  "key24": "4wM43MTF2c6hhDgDECo79deVkZaSTjixKJftwX1KimksuE2BNxq45NyrtbvPAknbwYp1CfLLuTB6ytsRDbG8nF75",
  "key25": "tzjqsGWBNnhUGhtfPsQLtibWwn735fM9xeoACsE4mWpz8Hb9fGrRTexMUfRchUGWqtTuf2rNiAQe38ZkFmVS18a",
  "key26": "4PWb6VKeFZFbiBZwVvZWs3bs56jH4TYGBtRxoLFjNCtPXuvg3UxhU5UmGZGBALt85T4wED5KmiJBhCeGgvAV8yec",
  "key27": "5i7jXAo1RazNUeffGf6Pb27mpBpxnUTQ7EwM4D9VKoCUNnoieksHb8cya8bo1fsout2rsmuruusGwPtSRPEqCSd8",
  "key28": "4HJ5aCcrN6Nqhs1GqThYBS82XpJNyT45Yjri5hFo7sarqhhpcnB81kgnbRg8AkuzQKJxVd5moFrW3dTHRJNEhUp7",
  "key29": "M9S7CtnN7LpJ99CYyUzr6chk1AhaTpsXRqZCRnWHxj9V3spLxdbF75jHoV3Kg36fJtwK1Mth7yKdLANaxYRdFLB",
  "key30": "2wyho2L9N2GWWgmPPo7MP1rHJXCNNjZ5rN1RGouTpvhWkYRddGNEdS8h5N6XtdWg6uHhMPNzTZYdEdbmZn2Ph7YK",
  "key31": "4q9uPb5tqYc3JHxqqGN8RWwEgu6LkGUuw8EbRXMp3d3dzX7obsWXNtpexJUfk4dStY3yFQ25hqWH4fwD2havAnCD",
  "key32": "3P1FoWJbY3oBhMyC7cr19Y75sbJxpDHHurn89vZxLDYspn3oGjMB52zop3cvXqec5RDvzVAcQu4FGFMSdscRN6m4",
  "key33": "2dGwbMymRmAkBWgfoE7ZNE18hL5CuXJiAqzKzd6BSe4pkx12m114RYvUdrWxKCCofz16r2TteMT6mXAXkpt6hQe8",
  "key34": "5jvh9iLf1eb8h2Kkb1vPRXGo9n4AELEN1D86f2A77FU69LqiG58VrZbUCBkoKnkDiEdE2LAJbVuvyL31BkVCLhMV",
  "key35": "5VaDMmcrmGZh7iakoCZaZSZVjj3Ly5zGpfBaVZqqteDDrgoNaJzUtzwtXNgEHATw8o4FzjytcWghUuUUrXi4TwaR",
  "key36": "46RGthoKrXFtt4r1MQjYVHSKcxEnQbZptS6TkUoCL4tfxxGCNiDuk17fANAX4SqAvR6CaPR26zr9aBWgVGhm7GnC",
  "key37": "4nJfWXrekiBLJ4io4uqrYUgMH64gKH3ndXkJRgPdR4S7XotUPDe6nd5wedSo7RqPCdjaBCfMcgqy4DAKcv17hB6w",
  "key38": "5zAijjrxDjc4hQiQfKxksTrqjPeWA3cgixR3QeyEDi6yvSfKJX1b8ED69AQ8nMTi7RHfdi7Bm97VdJP2aFMjfuET",
  "key39": "5UgkqCnmPuSDNAEwDABh4jchzEKqUrag2DQaSMqTx2uKvQyttwpiSqZesAJWaPiHpvE6Hv3HrBJFAbJPNXEYwvP1",
  "key40": "kCfmXeyDjqm2LZ8nSaaH3pDW81AvNWpMwi64SvWys83HtghcooyzXcTiJYXbCRNtW4MnqPf5FaUVV9wcju9vUCF",
  "key41": "sWVNG6PtaMTRquffoqxq5Msgc5LiaZsAFWHkJBbmQDLwjMrREyoqppxHnZwRKjJ9WdY7PrTnRwXub3mZG85Geom",
  "key42": "4by5QJEdLkwGRzpPGp8gsLGd2zRbZUFrNiLCntLvZPM7B7H9qcLe35nyrTD1UkZBipkmLxnwVyKqkKUFi4qRLMEj",
  "key43": "5263mS3RzvNDtC1aLvR3jwKKJvBUfRdXMqJUp54s5xTUGe7wQSgbvoUK95nf826dNvajKmUya4JLfmDRByBxwcoB",
  "key44": "qgKvGevjuNfHWRQQFeJ9QkEuRqngTGkT7dqQ3koxxaWoQ3rkWoUfZntZ4vrhmTibxbgqRMQb8bhs9nEdJzjN8Mb",
  "key45": "5KyPuPWUWHrvdrTt9C158LHRodQeUr2UiGWRFCLC3RmzUu5PZzuPgdyWXs6yCCnGJhmqffKvjnMMfDJmb6XAVCfF",
  "key46": "hydmTDV4ZzwcXCwcFpo2PFXvrBGxzw1fiPJPiV6zUd8vWc1y8t1uKM831YQb26WchQjpCH9JPfCsN2B6KXuf7Wo",
  "key47": "5xA358omshibQCrZE9PMk2b9yUjme3hLPezVc1U3UFWUAqC8nSeepTHamZCA6eh5p4kmZaVbT3PtseMwEEQPCAod",
  "key48": "2DcQEDUtTXmaatcwQJS3XSHGJGxDk6MHuPW13chJoqfXvcJpShcNXqhiu7odGSrv88q429AR78AAeNRjAzJ4T3T5",
  "key49": "2HCipuEYA24BLiu9SsugmTr2SDUj7Xuadmc9aR2YsBudkEaTgx1u2ncZP2KSD8MKbDvykvRmv8ohsqHBjMK4iTyv"
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
