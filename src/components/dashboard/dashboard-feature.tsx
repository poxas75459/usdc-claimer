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
    "2xYrFYCfWB6SqndKjxAMumQhNMUoEZYwEpb6qfEJLGdszePpSdR8us5rL5FwhH6J4AKAYkeNdjNxJYTKq6CJp2Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z3hFWkGVRKaD6qohVu4iWyebjFfxpjnzZ5SZYvmonjCSR3CeSkjXftS8zHtPc9tKEx95Dc4ttuuKvZfkdGEN8jm",
  "key1": "3w6cFsJTt4YYftC2a7svBjseASVfedYDWxZxqrSGutHpEB5BsuMYCF4i7YZrettSxFggeL1igFpRP92tjdRqRgZ4",
  "key2": "EQsZFihsK3CToLsuTTgkk6BzZ4rU1H5ciuG8Yyn8Kj9wRXAc2ih2UTW8xkjzJbBoDhi1TZ1EncG4moSqGRsya6r",
  "key3": "49z9e1V1vGxTfeVMLWXThrXaPE8KGnQwM4PhHEtARrunarCAn4wd9Q7zLyApMQQBfHM8xMvVPg393uqGQT4SC2Bd",
  "key4": "3ZYS4Qo6EYwhpAZfoYvY5MF7f712PZADgxU9BHGAtFMCgEEEM34bjmcFaZ9x9RRY1i1pKeR6nmJdZr6XJqRdHa5a",
  "key5": "2mtz2gVCPV8xa27rGZwPpGZjNMKDG2rG13BMX9739qjri1vJHGkHErny3wM2LaKmnQ6EsWa45txp7n4y6x5H16j7",
  "key6": "27d9nFeSFfZjke4cB9zpVKd4uNZvKDu365raZ3527zfKGHFLVfjeYzwonyQqTXs92D8SEtU1usQnYUocAHg6hPdd",
  "key7": "4bFaVCd1jDXqCBZJUWxqog2PD8VwyW6DnmHDMXkThGKv68vgU6P7jrxf6m1AktH9eDEZQjpycBosnTWSoC3zJEAE",
  "key8": "29rUkN7o8zJFBPEeLF2QsNy4gRavoUstxHc5jzGGwtJiGXR8G2kEXsJVWKS8f1nB3NCJQ871NYpVTFVqotjEAyTN",
  "key9": "3ekooKBLVwyW6HZffvwtSUi4Y5VZDfE8xBFa4YiYbTro3gyEtj34UuCbHuNJoD3GhEnczkKQxXsDPmYQrX5kugwg",
  "key10": "Yijg2i9rBrMguSRRuA4HdKXYhrdkQAHf8qrsAUqo7Ezdx6Lfn5uvQCCE6gWPf7xy3fWhft5864CnFnoPV6gPzpr",
  "key11": "2cqCu9K3w63XzBcfvw7YsAb5aXDpCzB7ETWw1FVXt24TKQ5hTmMuL7UBX3mQSWWzk7MvJ3ios3ezcgndmvVtTBuK",
  "key12": "5Q3udbcz4yY7bapexBQ4qq8xbeKnb93CUnA1u45Kn575qi8opkL9Ednyq8kPn2PqFgp7iKfhzcwW6NwNELco9ypM",
  "key13": "qKSydpA8Mbacxe5p6bBTfuUUqvM2q9Ayu8S4YwCKmtKhL1X42n7CAfYH4anixgbingtRiVi8woVYAxVWp23QVSW",
  "key14": "2svj47QhcrvS7BVgNcJmteQD9AC2DxYynfQnoDLLxGsKFo7U4irmGp2jgwgqLny82AWZGPr4VcecXSPUTExTt5Qo",
  "key15": "FemufXgNcxV5FkV4kgiHRc3pZYCA8nhaeqHz71uRcU3MAqDPhYaWT8EzqCAWxjrKwb6ZJFs2vwD1PPXGBBr1LzH",
  "key16": "5kXDKspwtJB4Sozzz2Mc2sftgGrhZbnfDRAfAvFrcVvUCpqUakCQLceUmbpn5sYygmDQoTT9VoU1wbhw9qooUaD4",
  "key17": "3iFUFtGbQsPaDGtw3nigsXoXnz9ujNXCuBLJmCuoyEkqPxnqxrxfHTkNab41xN1ZFR1xx67oX5f1ZYa4NrSMUrHk",
  "key18": "5MdF9GqSmVSVRrYxUTrpPxnNZEh6HdgiK95pT72kUZkHVZijCfreHF9fPFzy69D55MHfqQ1wKUAvrZnqL8UdjMXX",
  "key19": "5gfp4p61tTa6JaSEgy4z15bYJ6MjkxWufX1rB6H1EhzZ5EpQhG56YKauHKKCYoH66C3JiQJrJTyiMJ57cfMzFK5E",
  "key20": "3ahGeZXtbAinCjg9KSG3pgJLxXnYWSNzQs1pMmnmTzVbtjiTGBrdRfyqdtJK8KUgZvj9NE3z38AfurP8A2NoSz6h",
  "key21": "5HQTHFGZNGwb45BvuseMSvV5i4FSJfVaFRyAgwYTq9J32TDBGMofxorZ6cHZTCdMuw4jSCEdT2uf4MaAm3o1MMGu",
  "key22": "HUt7JVGQqr9qwQABiNrW9tNG1byg4rwKpqtzMexQsh1qwKTaAW7Y8CLXxgF7gfWzxQVrw5WAHUhQApxFFKvwrix",
  "key23": "f7CCVuAc8zvKZARPuzn5VHoe4nkw5b5QXKHgGWvKPgUQuhNRe3qZAj79WQB1zzJ9oNi94sTxN86CobSZ6djGabW",
  "key24": "3HZjfnLzSjRayeNDbREbEU5JjTjqvNVGKEvJfTuJ7dmKW4riwqistGfVDbFmMJwEgTTrWPLqFSBWZSL9hJXY8AgE",
  "key25": "4CvyBidWJWzYGv3ASNRpECrXz9YahdgHwNCpNJU5KGMbJErJuLSHTSb5Jq636SHFekHqxfUha2xj3vm5btRG7CUr",
  "key26": "5Qcn7FccYDMY9iGhXCVxM5FFpcc1ReYW7RFyTrHa8bySSCvvSAJg5qtn5iG23FNqGEh2DVuN1A29gJuza23ZDv5F",
  "key27": "2UEDqHRe9zaJYXFCx3HM5jc7jiLYcj9D3B6TQqSjJ3Loi9H83EVYEDqYvHVEQSgjKUK41gHg2we6RcimW4UaZd1s",
  "key28": "57gUKqKu28mbZ9L7YmfyGMqQjhAPXAiezyMwPrECJAbyi8ZCEAkK8uax3zkoBq1j3kybUSxqUyJWYAarKxBMBR6u",
  "key29": "39C2PWTn2j9aLne862crVnRCWDYiN4sjgayRQh2N5eN6ggV8CgSse5JPQJXkLLKU2rMpD34awzSpUYAsDm85Lwbv",
  "key30": "4ScoRMYKGWAmXEVdoQEdo26FogZSgsjFjkdMKJHqrR4wFeBQVCPSD1qeUCU8DV7sF9GG2NTkCT5p4rkQFvQtaQBm",
  "key31": "dnccbMCVhwuDKRxzZRuy8bDm5WLAQxNGE6jmEtZ9k36HEJBib5kTHQP5wQtLDx9p6oMdt1TLGFw6adCgXB35UDF",
  "key32": "5bQtweqaMnmDKLbXFDxWdiw8v2Wbi6Fvjcwto7TgU2mkB2xJWakgcAEo9ircUeUKoK1AtzH4h9VRxUSCZY1exhHY",
  "key33": "C4sWcGfA5MCowdoyo98DSi5njw6VrmuaDvkqUwb2s2c3rZgTc53aYQcmwaz6fqEduuaBCtMHvR9YpaRhU77dzW5",
  "key34": "2q7ssiXXqfebZuDJMRXHpGaLXffwgmoZLj14gsi54fMES9geD3u3L5WJYTiXiToMZB35HjxSm7zGwhhdgrMuHYKn"
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
