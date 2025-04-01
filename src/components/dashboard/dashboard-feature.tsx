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
    "5YsM5P6GWWpBDvRsj8ABFLvJD3ARaJqbySNk18rXKciaTp3Tm68qEXpLCexjTznUjq7JMVvDCi6ajjxpqBxQ8GnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fMPWpb2yo6Lqh5PfTzqSVQkPv5mbEDtncvUrSunUkyVuuUoKxhViU1STTcrfsHg4Z3Pw5n5KF1tT53tY66mCDm",
  "key1": "5gc8AphsUA3khjXoWGE9FDdH5iU1CUh37CxDP4JZ1nyfDnnb14qv6zcoSFUZwhKwytbmdb7cWn3Eog5YM6LvhBcS",
  "key2": "2Lk92gHmS2ceWTtyQzpCTmueeJ2JiecjdYXHjDicigGPfyY92vLRF28VGaP7yJtjV9BY7feHuqnGfTJiayvFDAGq",
  "key3": "61U4C99hAaNmHQXTpZjBwXaj4BGJSKZjuZS3A5rCw5StCPkgoVZDwdfD4QrCszSd5sRDedtZGAMSZ7qMh6mN341C",
  "key4": "65YZwveMdtZ4jc1p6wQo4heHNQhcxUh1rEKm6wxm7fnLnPJAidinrc7t3YAzPFjTeEjxwCj46eqiymM7UtVQP41F",
  "key5": "41GGZZqzWBiZsYuMxCnk762MZFjW2whKcwPhz3A3RzBS5eBuSxMMK83NUjymuJ5SQp1Kh7bs3Gifgo4poDiWey56",
  "key6": "58r8EX2GYSY7Q8T9ELDVESRniyPXPrdY7p2HmDVnA3bpGUR7D8oTWG6nDUkRMzgU3DuqRp7uo3HoSP2eugnF1ZUg",
  "key7": "3Rn7kc2LyFABmvAkrEcUEN9hgJDvxXYDqsbjTJmoT83oSrzq7zyYHPMuyMaAt4P1MfxmVkue7BnfPNdbmrogoboZ",
  "key8": "3MV3kGjUnEpET8svKqBjTQuYukDiWB1in4W8v2775jKkD3CnJbGg4j7EyH3gWAff8gUmnF7wspyvhy4g9iCnsDDh",
  "key9": "63fY3xjh3YamTa81yoHATQU3cyCLhiyFDR9dTB89YjXiDyDjG5GQFW37yJ3rhohBDKBchf9pYMBuvEJxCGT7SQwv",
  "key10": "4oG9BcHXKFh2SBzjuWa6kYyKMZFcpNY7Ni4fuNZrvRdxuF7VjokkWgFoXjj61bJGRtUegaXb4E1hAMH4YBqtcb57",
  "key11": "3Xj5gKVUwTja46ZmSwzEfM1oVeXTax3Mn5Au3agmYpW1c2EAHqPCSocCaKqyLSRKp1rseUZv6bDieofA1MdxBQ7N",
  "key12": "5ybuMmoivJsRKVBAL5kHZGHe2NqkPZ7hbbxcorNjq4UAw526ENYzwAjAsDKtMD3tHZ5EwGCi95pT56LGFxsRBtZF",
  "key13": "5Qtr11N77ZiGnHmLY9QsFKv7axFsUfef4GcqDiJm4SQYuKuqXEBPcHRxMtnyZvjrZ8msAz2tmuFfXrbKXfKxkxww",
  "key14": "5YohV84PPiXGVf1bcJtTXrYrVYL7bWmVTeAesQv3FPKYpbCbTNgzEkNsjiQEDoDi9MM9fPwj1MD3wsT9tQ8h9qac",
  "key15": "4A6GpEfHH4iZGZGLvtD1TkwhEJ6mJoRqRJqbnufqomm9eYBcoPqRzJ2prXg2yFe4ZKjeHK48ktUEDva9zDwSfnSo",
  "key16": "4yu76ih4zyAWyKj1GwHLVJWSngo3QTfQyXmDWKrxEgcT6HVcC4bjX7XbZWgDmudPHKQU6uEc8eKr3PGyHPyvM1or",
  "key17": "67bvUUfZVnGpgCvqJBHCAhkvw9ifDmByu2GAzFhJRFX1SuicLyh4F2qVvKjJkan5Aue5a14mMEs6xSTy6iBTsXXG",
  "key18": "WtZ19hkDAzCeoFCxC7rD8T3E7ZpN2ALLyzXpfHjHPDHwSTARiQ6DrwiDDt1BdtqhNyWnR1rdLSiK9RfNB6aB7y8",
  "key19": "eNwWXyRidPDi8BQL4GSmS3CPZU77tP2QtQLo1za8v7LwHrPP6SJTHr3tDA8mhWeYx95WnBNoc9Lew3uH5euMctE",
  "key20": "R4s9XiCxsUBw1F2GXmU29tHV8P853EbykPt441Zad4gQnRX9YemuZcN457h9NrNUNiiHG4VZKUe3WH1WMoM3Sat",
  "key21": "349YwJoA1bEk1aB6M6rMp71ofgNEVHzL6XWe7PGQvmzzLGcTPS51b8hMYxXmpYApmWbLwBrdEirsLnRCPGTaVP45",
  "key22": "21jQuZtyNv6GR9tpCkiHYCQrzStNFkAyCk66BA8cj9GPgsxNdWuofthwBfAHNSMGr2VtJxAyEiaDw9jNiqt9vMeF",
  "key23": "41Tqd6rv6nJFZSU4DQZZdy3WmGPpoPfAdHjo7LXp8ZiBGadpy5Rog2MaR46BAokhPUvEhrX6FyGJZzUZ5FKYNfgr",
  "key24": "JaJNNEb1sdadZJQuXQzMuL1f6dGYyd6Lqh29P8QxxLpDi4W7JwrvX6DSBpiesynGu8zurqmoN82dxysYhAPUJjd",
  "key25": "5C4PTQugAiPJLLQRyxBZvcEYnfPFPCGQVFMzHXjnbS1vhrUMwY9c34J5h2bGBRXms35HHKwd9bdp1hpjDfcEkNy8",
  "key26": "63xJ5py7jkmSW7NTEL3YaFRULvEYKM4z2oGB6xDWKJEijQapYkFSe9wUd95AxVjBvQjaSWFzLb891Yjiiy6YP1Qs",
  "key27": "izg2eD8sPBwfwU4tipeDivgH7cjbEt7hwXo4WsVzvwhn6cmgjn53GAn5z3pzL2kNMBemj3ydXk4cJtxNsHAadVA",
  "key28": "5qSCjFqpuYgvpyZCsRvbimpvuT6p7GmKHW6gW2hdACe1Ds4e3fgd5gJuQ6fNUkVHyfGjqEMTN8i4ZCKgJTEZvm3c",
  "key29": "VxE47mag22iU2J5GBBkNYF12PWyEuwpAtjrM2syfGc1DHc1pxomGLZUtKANZf6MNPWtPLVQkpkGBEVU6CbcP5QR",
  "key30": "VmW8pGexk47eBDp5Xx4Y6WSW7CVazikaDcL75rRvjJ2JFQjRWpxwnFvruucFcKoNuexa6QnpzNbfm8vvPRQHtDA",
  "key31": "4pSbs6d5kmEzVKtYnFvC1Z3G9aJLHPxJc9X8PXQfUhPT7vM5w8Ujg5Vb4Qq5iva6YDW3cEvPing5ptMYcNmNDE3H",
  "key32": "eR3ECpZXKA1pZ2YR4k79NaNbZjeEWSVGeA3ywiaiSHWJATZ2xkEJtM5UTv41RVhBr79CFGRaFUwvU4u3aNjkiFM",
  "key33": "yYa84PM4Y6pdCEbarTQFru6FM9o54VCGRBuafyYPWnpKh8kzJe1BAGtfAHE1yAGbKybYbTaJXbmLDqVGc7Awrmp",
  "key34": "zaLe8SmbTEH9Qepkxqd1zJFKzf7GexFyubTFjErXzUYf3UssnQAzsvABBuDPNSbm3zs9wx1kdYaMctYTbaWz38j",
  "key35": "8u9pzcNMYJRFN2yAakc5wcSZZPmufuGk2sFjUp8xKmfFYKdYsmpJqZnWDsU48WqYyyq6NzxgtVR4qX5NjV3RTNJ",
  "key36": "3vH5HhMU9QqzYPH4dKfjnwJ7yCKkcoHpnVmLAJ6r8SGtWeh2e8yeuZ95RFMucWeHJgLLvMSNwh7TnprtnEK9DbNH",
  "key37": "2Uw4Xb62fBkUsXXVDAiwzugHQNSLQbkrPTisWUHKHoEh3Wip4vZs1Jp9kcEbvrJhvAnXHy27EnqCtNLVMeGFivs6",
  "key38": "5MqBkhYBBz8zc5MeRX4CvQc2e9TJkz2uaBWUaSHbBguUXUEmao2n6YhwpgX63vsS9QmsKEE2mmJUXBkpX3JdU5EH",
  "key39": "5kPCzs1nzcmG2Pa37GgXvbCtniaZVBgGX1zPG22FMpXcQsjCrDMCHZvUcKynfckz3L5mKHuiHeGoPMyGC8YifvTn",
  "key40": "3e3gWuSQzMQq7QdgH81Gm27dCAndfdS5XXcC8kCMoUgdmhUrmVfuZEXUiaA9bHD7ZLVjx87uhw4EZyYu7wAFu16w",
  "key41": "2TG1H2RkcmXG5DzpUwNqo3m67Xp4C2kvmgMJ3dLiG41K7tZRZ5TNPnbYVaTEkkyPWsVirrnkLnKNGYHnu6ZRh5rz"
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
