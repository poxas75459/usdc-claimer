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
    "5YNCQPRPJg5wHTv9DKVzDuDsXMfQ5QAeA2RNmwpm9pd59Dbenqku9xCCyxmeeZBpStpjcLFdXhzubBdArkhkvVUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XTWPdVkGwf4PavvHjARtTundsGLVQQCsrZbgA9MrQowGeFBc41m7p9YD3bZdXXyH2fsrEQE94nhVMPArdRuu1Au",
  "key1": "5Vx9AxamPG6iGApSX8oDn27WbvEeCwZo25rn1cK35XyUSNpxFGThwsoB5keRntyKMTQgqAytdH3ipifQ7eCA6yWK",
  "key2": "4tNaayNHaMaYzQdZMtzdpeNMGfvQMNcNHGdpYPQYCrdsdWHymmjWKVraeus14PsyC7feJGcacxTmES1PgDzpZ4A4",
  "key3": "5hoi8kNzkk352Y3iJVfVqar98QDN6QBttfMeLxR4i85MZpN9CgHMBuJAtfaNhsE4vkkMKDmEj5KAn99ykD7vCygc",
  "key4": "67r5JgFVUexgAkbeyPKrvaciMbkPTyrbCYQUH5gLEvt4pMQCCHHLjVyCLcJKZiGS1Seb6DkNK4KcRxDxTw344vsh",
  "key5": "4KYRGBzgoGNgCbcpaisonA3FErbpLcwdy53dMFE9jWvvBenB88BbPhHKv14FiUtknPnvKPXJzpiT2oZuqncWCSad",
  "key6": "pvmweteptcwzkoFcgNeiD9nCB2ueYH66xtS3vCtBLQcQBGgpS9BhFzhKLDN1Zs4Pv3aECVUAtW87YxWR2GV1CLA",
  "key7": "3sMCj8JobigpUvCYUZ8Scfh1DP7a2WY1F8VbGzwceiDiHRecPb2aePF5rvzwDvfTACJdhgwtQKteb36hGS6kJUvJ",
  "key8": "2E9PYjJN5YxG1fpF1VMDfKDgUSeRRkHGoQcU5F55vUGcVVsNRg3sTCSvkrZD3myUHLpRMk8ak4zrqby3JAjejxRZ",
  "key9": "XUaMSSe12HRbvczfuTFznxsCecYqFqx93MDiaum76E8ALv3wZTThRWhHY4NFoLViu8NTKNsF2KSG1H3P4ncGFZb",
  "key10": "5mtAnpC2F4TX2FrVtwTfqe3miBLESNBWts1ic9XKJ7SD5UKSZgQeCxFP33D14D9mNHsag6B3tUDFkKrspJFhpKdz",
  "key11": "5W2XLGmN5KA6QEFvgpiDsiy3zNtVeMMnMsWaVq4yx34CNsQ2UZkHHL7PJC56MDEhnU6yYdi7hUykLnS5GCLXUsgc",
  "key12": "2sgQKxND6V8r2RwWYqF6gZ5tEyzAUmAFg3aPiJAySXBkX5dFxwhhJqyhrjyT3pUw4LyYVUBL3pzdT8eV3uVnyYir",
  "key13": "xjNu71kpy1R9sTk9o6kZmkWf8xjmzpP8tHtUbAPJZS132vVv1mgL4k5whkWF96hZK4Fqz6MZpkVUscKbTGZeyM3",
  "key14": "3YzubQLCcz8NqbiLwD9WCqEZrdfbFAMMqkW2NFaHxB4XML2uL7FWpEsr2fqo3vtbeN8KXX3EqE67sogntLUGDgtg",
  "key15": "651gq1AyAa7FJAG2e3uRpqCftLV6hyTKZQzrovmuWqzD3tsoYW7B2RYyjj5Z21fqEFvpyWsPTtdM2b88mr1m6m2r",
  "key16": "5EXjv8o3Mn3PsofwL2pS71gJdDeJTP3NTCaAyb8HjUUfVe1Ao6d9vgv5Htb7NpcYvjLVvMgPkdGyf23V2SXWMTF6",
  "key17": "4e4kSWCNSzmCBULCN5JxP1kGW5zdTDjaQTQz2feAuuZYnVHTU89GBkfCSrMVySMrGx3Y8W4guHTE8ivco8mP7pBG",
  "key18": "2GGw8kbojnCg49U5vzQLuLDiHkWgHQD9huprFoKbt7erHriM9UpkkL1KyFiLUPMaSc3m6VPNcQ7xtGpDphMpQSch",
  "key19": "4WiKWq8dsq22mAtYbBmxj6pxr247JNusRBTHU99q2Uw9ryyLXW6Ds87E8784vv9MWv1pjNQvPKz9N7TvAQvLaRTS",
  "key20": "2SnCAUHxuYKxHWdeq6PUjE9XNcfSzFRV49W4BBbHyyvY1esqoCpE1WVWpzBB9MFjptJonVZzmFVADFfSpxgehhWB",
  "key21": "3qzxR2WrCBQLHCMLJcbDssUvJeTLjzgPMcNy3vjM29KdsmfYAXVM4BMKCjBqC8ZwXFzyoqN17vhj1ZvkudQ18hTG",
  "key22": "3murPMv1NkZrpxYVR1aZSpUs7NGkoGowTCYb5ZzKD5qVzJQNRHf7TvoKrfiecbqSqLiCNQY8vVEsusW2VCLatbNU",
  "key23": "AnR1rrum8w916JTUh4zHEhfWuii8uh7VKqwnKs1yZ8YsuuHcGB7TP1qtiinyz5WgKm8wqtwzyRhedxjYAuVQDJm",
  "key24": "4suC9yBM3zrmW2v7P8U1mqanDhcnuuH8vrrnYboXiMaVoaM3yeiqDTF3GeAakR11ePBQcnWoZroMDUhBymXMtVbD",
  "key25": "5KH57fwNUVYk6zQHpQHsuorezqe53uRiHGn3RvNkhfHSHwcaTRXynQbzZEsN53R9dyqASVigFLpo3h3cSapc2Xqo",
  "key26": "4DNikKDgBVDQcwnnxy6wq4qnH3AD8WvAtWKieEDoHFBAQoKRoFaWpNj3ToTpxZp6SVTTuJ4Ac35xtf23RkKznoab",
  "key27": "2FyVmKnGKm3y4S7LkDzwE7Rp9rGqfsasj7MRHP8yh4d5RsA8Swv4q3JfBftfwu3y7zvdtBC2TD5xDC5t1MEhxG5e",
  "key28": "3mL1DDFgAgJGFJLDYAPVS917RkRjCMGowW1FCMY92VuxnzjD6ZQT5vGWCjzhqPsjHB9ULPctGBwvBxDYtUsUQpfH",
  "key29": "57ywCykyHgbxJNV2wWin7d7tq5dx8nC2QvBUYhJAZMVD2gCzYZTnADnzJCZPnFpC4ckhrYe41jsceoDVLqEqf2yv",
  "key30": "37DN1bgMcwRGoyNTxSwe3mmNJZU2YXC3ZaA1n9Fwz5FrbC55CZvwGo2Ac7E37CU5RVmEMiYu3hSttFV9YWA7Laxb",
  "key31": "37fgEV6bK7Qt7144fuQgv6hEXRrepXP9RfgLsy2u2tWVnvCD9aF8Qb6JAqN3R8S2Zmebet9XktJhCEcAt7EjVkdE",
  "key32": "Y39UcrJ4PKctLyRnZdAxwJcvYowDqaWhJHn6n1AeY7EJsP2qUoF6ZSbzu5uoaThb8XHS2sR5Gfx2UiawgFZWFpG",
  "key33": "3aXbia4ne1Nr6NBYqRf2tFCvHg1451jWi2RrpEAtuqdghnoQ3zWed8fjNDrGPYoAUCqVVuqMKR4kkj2YHmen9Zmc"
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
