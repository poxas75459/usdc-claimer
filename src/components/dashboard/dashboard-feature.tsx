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
    "452LL5q93gtSu99fW5DQEaUQhcuwpC6nJSyjxGNT6Fc7DCohkLob7EAEJuMVEsuo5CuSq2R99PVgXMxui5m3NRze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wwpeCuRCsATGY7gKaK3hhVoU73PW1636dqBz1qUsPRCo9pmJQYmFKAoZh5Bk1Sy2ukpGMbKdsXry8J41Q99MqFJ",
  "key1": "4vXcpkPShweZ92npMveeqXbMP2eTYgwNpEf5pqobHKajzQAHe9zx4VRmH7sdhqu63ZkZqzu4t1eeDTmLGQb87X4f",
  "key2": "48G8bTB8C5Rfs9K57HF2ZMUuJrzFSGtBCZCmggdP4b9efTN9oeTW2JrgcgwWVjW8eamjjjGNKj9J47AVXJ2xqqQh",
  "key3": "5yKJamLCaAkmseeaz9jTUvok6A44MocfKtDN2J1roC5gDPiHezeuRL3c5WgxpLhzKc9qGcrpM8yyKvEJ4cQgCWWi",
  "key4": "4hu93wpqL4RtsDsQ7bqwQ3uqYtx9D74FAXX71zsUxtax5qNqBYJqu2Gg4twxmKee8o1yvKXWdRM6HYUC6m3Cw8xB",
  "key5": "4kBaBo94g2RP2TYQmt5hLGZXSggwm818xRye1WcZLQmbJTxsX7xu2N6uVQZRBVv2qQAEkQdcAaZSXY3ZrGjbHrUY",
  "key6": "5mYNFtbgJFSrmTqKMnS3ucL84qg23EhpS9Vru1yqUy9PVvkPbccVhyUSzSq9W3z5h1FSCQRCdMM34icszHY47tc4",
  "key7": "5WS3BLKizqqRXEsvxKTVJ5s7mn4qZeovWMaiToj8u6YFVnRrDHPXrg2jn2oBfRVcytfpoqJFCE7VxBjsEaF8vfYn",
  "key8": "2UQDY4ST6QR3sU94nLjs4e8eRajMWJRAtswwfvycea8gQ9jUPw2c8MFESNF2hhg7z6dmuZ2cFN9FyDHPsec8azTt",
  "key9": "J9JcTaZWB4asDoeHfPXtGtTXjAQ9TGnM12vA18PuEfJCD2HNBGnn2uZqk2Wyo3yraKMFdnGLBYY8vUkCiepvPja",
  "key10": "2bAkYQYUD6r2V1DsSoF6fTuhGnBjUGShLZ36DxKskBmy7RjGwBJTBY1MCktREwYkzT8e34s22E1pbThYu8VpLfW4",
  "key11": "txejYa8XLxDvmfnz9WujjFA5DB32C69kRtA31Yr6ZrxUsCEV3Jw2Wt2DB5oGxLqUXrWLk8ZLVzWCaZx5YMNEABh",
  "key12": "3Sowe6uZSNvERYzAkNFup4Ts5XZNck3CpXq2C9AzP866nwqDXDrLnRjeP2tgAjUt2WrRGZTt8KbKX8kqnoHAYCEx",
  "key13": "DXTtYQ8R8qnAoGGvo3yJH5vULYgEuT9zLb6uutYfcoJjjJAmAVxbFiudQhdtUAuAVp1rrNQsc3uv7ktYPeV5pHX",
  "key14": "fMxk2YaSLtBH74bqnrhd9cwqHPHut62tLM6yKTnytFJGETz5MeZoHEUv9JMKz2mBkaqPvWCGYE5NYD1zEd2jzm1",
  "key15": "4QgGAAiAkuGkffbskQNyAG1LiwzS2TTF94zZzd2NqqWCXPDhwjeciCzYUhbZEzmKm8EA19jPW6UfMP4Gdj2Snu82",
  "key16": "3XpEKxXpUzGwJzspbxJhjku5BMSzt1BfqkxWxBKumnqQXmEhH8VbeJQS8AwEmdiEW9K9GDxQ3DPRCdmaTvKg6x1Q",
  "key17": "2Tikqtrgibk31Kv4r1FYBMtpS7XJzNXRAyTE5uvnz5pDjewH6iHBXiyJ6WyQef7Lqj1yS92fajDAaFhfuGEhizQR",
  "key18": "VvaRwBCTHTucV5cWR2m7teg2Gz73EsTcuvmToe8D3edQ9CRgyYgML7nQGzyAyUXggUddq7E3knQheZr2CvhahSA",
  "key19": "3RLckSHgcsZsD1Ek4uij5g1pQviftgjynQz3mjjBwfTFZ7gW9eMokPFtJvaBGSD9TvrKa25UL7XSBuxT12GN4phr",
  "key20": "488fSTLzdw3iQgSCYPaNXXPu4BErAaYWcsAZ3HtRKcw1s6k6ZNeRQ9h8c3DTMNeDe99tAG8grExPux4KmHSjqyRJ",
  "key21": "3V3XX1UQBGeTsXaA9BK2Aq5BUN7AKtDWBpivkcBwDKGPFL6puxanVeDhjZC28Q9U9QceeoznjyQTusXAw1u6xhuj",
  "key22": "3gYmEDv6n79xWoKHnJfHMcG1k1FvPyYW62c1nCUT34Mon12tULPWDX6zBG3YSd741JmE5jH23hLuQXSP7Mov25ap",
  "key23": "4bzMCiHPr4sjaop3qAwXEXjJj2KrmGxcwVSUaTPMUmcyga7LiNaXBej9Kkxd3YuUYaxTzAc3jzsyBVcYzSp8wmWX",
  "key24": "3gmiRUb6ZakP5iSiQU6uYJyEZ3bndZCumRzL9kX6Bo4vVDGrKGPGqkqeU4mKiq3NSiE8afvZcUY6Pu2MHLccWkEt",
  "key25": "5zVFbpHQUWVAGSiQfeQvdsRwWDJt836USq1juLFTGuBhaFTJS2zMc6ee4xSTqHdD4r7MKsPYCCcdfFzZ4Y3yjdRc",
  "key26": "2TdrWsvrZNQgz5iLRkTJFoSscQc9rE1tWK9ZAWCtNMv5kUpSjMjeT8oiBKJyqCf8o57oumFtvDF57fAFpjnhP1f5",
  "key27": "45WqSx6Bmj4U4be4RiCFfjTKu8CN7k3Z7ns3VbGjhRe3g7bWWNjtjtrH5MFLqz9REQYir5i27PQdXs8SdQ4d6fyZ",
  "key28": "3jQ48TNNrwP9dSn7vRbwHTSuKCzthKGHcmgvRDTmBcTSkYgTNFPHhXpmEQ6XRTKD4aaVdB583XMZostTkqEAAafG",
  "key29": "3fbFuR8o9S1pLaopyc28TkM8UWchYJoEgAbwWdXjoCX9gNtvUF3Z6AoDYDk7vjhEtbEnHDHjKGiY5QUkfUxZ3nKo",
  "key30": "24CybGz1mcaaJ3QCg4YRN6K1hdCorwX3MAt81Txd8EawrdjfL4DLTz3hC1CsnNNLqsyCDhYBuBD5d4rAUjhukjhy",
  "key31": "4SELMqqmVzhK8LrtNboJtHDSnFgBEqPihJgv1JNH8oWkD5tR86SRU7Wz33GRHrVqSF6ifA8d1jZWXDsQDwqbsTQ3",
  "key32": "39NXEUXrzD4zb8hpxwZPv1BSFZW1vtFZbKKCMHZMowhbfSRGp8TCxQtaCojk4DUZfvucxTfJRtnoo7YzCL3J8Wkh",
  "key33": "4gSSVxaepAVQYuoMCqTfrrjgNe6Y3obtMmw2eDdasFveu7PQgUFEGKEwDS778XapRygKKGEVGcpKbbdgoexAwE9z",
  "key34": "3WUobEqgZU6PAMX8VahVzYL1PnTnFdhAKnd4CRpVgCJCNEoqCasMdzX6nUk3zte826b8fwf593FfnvQwkGbqCD8f",
  "key35": "5eBf915847w87rJVEaMsUjJe7bDbyLqaJvsw5MsFWHZfz6khZENAea91xGiQVGL2jsruBiEA2BWQqneGo7an7zQ5",
  "key36": "KdqpDRtFuRDXpD5RV6u6oxFDukm7z2TSo7Qc1g9jaHVrHJcsYuqL5CPowGBwDwyPBrcX6HRorddfQ6iuTLTSTRw",
  "key37": "4KhaUQhAjeZSsZwNnK55bLCTBL4qn3F4xFJwCSV59RubTQNCfoywob9H1n1vLANpdRq7eGd15r4sKEaEU8tjn8KH",
  "key38": "4Xzfs425d5HK4swgyQkV5tijPn1u4TRtrcp4627A2VXicZrS5LJnWeRoTbP6r528fqYUa2ovHryjDxUwKkGvxE4S",
  "key39": "VSW9XUJxSM86qaZwTNSbwvqdvdnC6k6RkJ76RBa5WSwEzVCBsAHdx9XmTUDSskrhdAVTAAVR8rgkzEp3aiqRSnF"
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
