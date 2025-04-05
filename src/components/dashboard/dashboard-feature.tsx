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
    "5z7t6GHph75iLZipNFNgyGMLvCZ87c9W5gzUGBUCs56kaaUaLj4AKfkaANBYNzVwGMLHgjqyk7oXxhwZqU41j6FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psRHN8FYcykipVCwBST5UwBA9e6tg3enCiRTMmDAV3q2ZTfE2bjc8muWiWezCTf3tvnZ97R459VBtYsX2hBHgAH",
  "key1": "5tD8Ng7788QgPG7xWD3qWmSAJCfM63n5ERC3swQbct8cYo7A23y16hpDPmD7BwjjhSyFGjBPk7mJ7waNb7YGqvj8",
  "key2": "hedLVbN5kWYM69M7FYuSmroB1QzsQL3Ex39dX3UosxavtXAt7JE8aZhcGtWyUd2N6uaDgpCkj4T8CUezvGEzhLA",
  "key3": "65SmiNv1L1Mz6uXdK5AFmsT4H3EVeXc6DjzPy9moxgqi9erDeJVkwiJyQmPe8yyjC7q1zybasi2JZNqMevFg5n7f",
  "key4": "66KzV4NQhci2YYRhraYCHT2cLioRjnf5qa4kzfMZG9uoHrJE5CveLBZS3GhbrLEq63JcgdWNoqTzKhnJxTyebuUA",
  "key5": "3jJjfSmjdpUn8QwJSJ3A5ZVqrHZDFd5t2YSvQPAy99SNsJHakcKk1Qza9j3ohaXQCZLZDhi2P1wc5Hg7d5Zvxqb9",
  "key6": "59RWHf3yoVHvDyDoY3a3V8e8sFu7f1DgFsuNQkPP7A4Zz2BN95P4QijYy1KjmDsWEK2hZXK8GGwfddQCbPtJ3WqC",
  "key7": "PcYTE84mNsjxwJ2kxUVFpiuhXacfdGHcuBiXsi38Qt8MZZAVv2RFxtWHKYZ31kGrzsHJPJuPV5DVogbJ1pEayUo",
  "key8": "2Hxbo9Ca1iD2jk1EMQqt19WgzFshYSbyKUy1uRc62aoSyNENDpdvw6QBypqu6E96eF3gnAUDbDkNLQA52PiPCg7T",
  "key9": "2MeLVW3WUUW5eTLupyzKtbPbtUJHJZwjFmMFNVBa3wS8h1E1FvsZMj9PGUtsXSXZdPgqHjzg2iUcvfnEk1gnYDKm",
  "key10": "26vADcQRmcCZNUBkKNQ3e5jHqq6sWuoQrBnoaRmkgZ2sohT1KgNooS9Ud3Gx1BCpJQheCptXUZMkEw1F3vqRqige",
  "key11": "dBUJKjWFGvvTTxcU4dDeXe22oRXrKugYYHDuMAQyudTMDvFJSxCCsFq5aDkLcpyyvUeJ8BThEuEph9N7f23xk5W",
  "key12": "53rzECoK6s5LYzas2CiDEj5gaLydwNjW9DhZeiGfuASdtckc5kP5SUDexpHJksnoidZrxu9BK3wtx5UpcAwvSvQB",
  "key13": "ALjMi2tqQAConK44d3TbJewNziTZnfWDCgyVoQr3w94HwFS4nnJBSawqz3b5qU18bqVSqGRVYcZKYjez5ek3Ltv",
  "key14": "57nNUdoDnVxZqgx7kNfcB2w7VRYZHLamiFyBHtvur6JEcV7deKPyfXNYybmSFoheFmDkTPnCFURWYLdHBitiQS3X",
  "key15": "5RwUUZHYHDRZCgEAhx4SyPeeS6T5bVEcAL5g6J6D6kfqA8NS8dF26fLDAVDA8zZHuYQ2kKx61ekphNweE63bZcBr",
  "key16": "2mhfa1GGA7JBSDLFh682Lshu4WPrzrzJLY51QJSsbtP4xJLjytCRMTjuJc8R7uc3S1Te1jyh6NaWCmBYjYYkggmT",
  "key17": "4r44dRHhXqComDFqEmsFZrf31nyC5kWBi3QYUTLGCc4Nk2JNtczA3Nma1oVwKrKoMzNUdUDSfx61cwCCuWaJ9XaD",
  "key18": "5nr5WgxTNVGjdWg4rcW83TgmYPMZKjCc77j1JcgWTQnbKdgb1RP9qNPsXgYm9PCBZgx6iikCC6jMc6usuMG2v5QX",
  "key19": "4KCB188hXjFzmeg2sJbBYoCppRFewP2SDU9HW7PvXNQCEftZWMnvqgT78y9hBMFsWr72jMJTPC7GGucobbP1AJ1N",
  "key20": "4NUBYgYGgn18oVTPBKDcuyi1LKp5HNTWvQxoD9e2HCgibtUBD4oJEFohwCvdgHfWUJoAPpFfBrqNSsW1uwM6WAtN",
  "key21": "2sqRHvP93wh5uuFc84WYMPPe9Lc1unkbjgkEScsdgYTTiChcXDWPY5sy1CKsb5t4c7JRt2SUg6odhtd7sNCaCFaM",
  "key22": "evL726ddDhN3RGJt7kEaRHowHky82V9dj5wXvmqcxMKBfb618SCD6tjGiaz1ZbkUN6k31MqPkKM3SujEuHLDuoV",
  "key23": "dcZNPCjR8Pb6MsXvF4ohHtrDFuXKuU9KLPNr7hdYcaQzLSc41P6T3F1D43zPnqG7vuJ7S5atPKabeN5eecc7vgd",
  "key24": "2ACr9PHaxBKBpeSjvYHeVbAtyuiK84av9U41QE9eh9NnfekfrFfnHLnP69RhLiJqnSPwFptotqwbY5JfeVKA5h1K",
  "key25": "3qwZ2VcwrFo5e8DZysDnNtW4a9zhTPjbFcvvCtGmHNfgJLFCPwM7PmWHMHqMDq6aGAXTUgaJxL6R2yKJgirALrGA",
  "key26": "4SKwwRsmtUEQ4mFWbHeqrBQS6VqnFwp5gfv8jftRUSyqXuYGxnAngi2QeSwk2GLXCdgf6hyLjdE3FH1P1XjU4Ssw",
  "key27": "4WEUpMb66a8rdzqyoFhGpdcMz5tzUFXCL5CNp5W3N94HQgzVLoRKWvbGCUE8oh9pcX38ETjYTroow13JhNZdJ7bm",
  "key28": "3po1ZpVMQgNH2J6xEavCKFqJ1jypmMPfnsD67syXR91tvogggWaPEwfXsQ6UZTc2AqpjVAq3Q6RDxJqGGNXQUUJr",
  "key29": "3ZkLGMkRt25XkvMcK4arZxFdfu3LFhSk1B3hfWq5iU9mgyRvpjRG1peduPcbJQgYVLEzjvgAN5XYVFiTDhf7XwiR",
  "key30": "66RbHR3EVQKwnpEwYABmkofVHTcFgy3mCF5yBpMH6h2DkdkYq5LDsszGHcakSvMkH5kLrpsgm1XvGjPPawZGW5xP",
  "key31": "63eJ1VT2DBgXrDzoj8saK2CZFf35ZoBJ5cKgV5KUhtnr1g19jxBc11mwXEV8BMcv6rCZUQ323d5DvmX7G6qJrhDp",
  "key32": "BPRyVG7Pd2K2euTJsLoEHFKGuTn9xMXayRNu6La5n48ez2NnPGKgCj3cbpuiDhCiXTedMedFSUgZK1a2rK2BSG7",
  "key33": "4yzrpMj2sYjJiLWmMdrWotRomRSDK1nyA9XYVPNMpRz7usjW9nDvNJQMqtj4BG6dwaXk1HmsFJPeYT7wnXcwH7Be",
  "key34": "5MGxegER93qFnNFWx1uGkqF7TVRwzwYn1Q9rP9JNtMUnPq4pxCwiTc1SJLSLMUL2vJyvqJ2gzRu6KaLkirRiDuR5",
  "key35": "4zPX7krY2KtxfzbQn8XgTF8Ayi9iE8gjmzRAGYnQEa4cpK94LKTWuN1kDiauRHAZ3PoNfg9JFTYv2eTh7ete8Bvn",
  "key36": "42PCpoxsaQgBQEFZurkdhRmQgFKLgVaT1MXZgRcjy4X6aebuQUEDdLakjCVriwW7zUSYxJa1sSgcCW9Z6gbNdXEU",
  "key37": "4wMSrXUjkRUjDvqB4tPsu88csXGiN8gj7EyYeRAESXrz1eJihu3isy6RB1thvQyU9tPFC6HpZq56fqnRiVj3UXie",
  "key38": "4fUkKaibqPN9h3EbXWqALZHYS8KcZwVxycuL7J1g5Dc5cm6kA14Nddej7Wr5yaqQbrsMGDjyPFzT3kUda27aZ9Re",
  "key39": "5C1hWm4Xr5QzvscJJE6DnHH3XwkDjY2VAi3F9b1Sa44vaRyVwCYLxwNVb5iyu7dCLMu87Maj15ZwnMhwRpAnn3oH",
  "key40": "3cbc6dxoZ2f9z4wfmt4p4Z2dESfATr6ysEE3HiHPrC5BjRFgTBk33ZvBphHbbjkx7BjJCbcEhyzxSYpv5TCjt9RW",
  "key41": "HAQiCYpmaKtpbvaVmD6QKF4V3kQxBepY8hKY6as8sGpJBYmrtyUtd7W2bYjAQ6EGzh67WuBoUddrKfz1HuBrKJP"
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
