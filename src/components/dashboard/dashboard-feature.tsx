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
    "3gpqoNPvJMD2KwFTfjfJ2oqWg5KvxLi9vqGKk9GDzMogXGXvfrQANjBsuQ6HBF23qLVv6V61Qmt7xax62ycQ9ZLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdDUQm5VxUPACqh4TCnA5PTsEvATz8iSdTPQNsHbSmHMAToPjpmgs8y8SgBdR5BSkoewXeTjS6NEBCiyf2UkrZW",
  "key1": "4L7cz9GVjn6ygUc3YTDs3rw4M32ez2aZ5jgxGKK8zq1Ewcg4suubzf2hN9EWPiPRytHLyL5cs1xLgbjrGtgDCPvj",
  "key2": "4sr7UCzgQEkqAWF3b9A4oF95xkyKAjsk6poRqsytt3psU5a2WDEqbBsiG2x53vqZGN3aL6vF3fvU1Q8njMa29nz3",
  "key3": "2aWFAdrAV2WfJks6LamixyrjMYT9vM9qQkW4jiF8D7VtTcFtMX44GfRHQdptnfs1F2UVWz96M5zHXhhNSd3atHbR",
  "key4": "2yFfJP8NAe5uJt9Hi6BLswWm7n65Bp4prfN19eTaD4nSqikG87H8ABmjRxmgEg7sNNJyzQQW97kSzwa3UWQRRari",
  "key5": "qbKq3vgD8v7La7si8yVexYbp8CnHqUvB8CKUi7nSJutRySbJsVq7CoK2CKnMGj6vHQUjc9AXb9z6nuychpLW3wB",
  "key6": "5xsMAKwYUfR6bqH1Va46vH1F3vUUDqprPwDQMmqw2Y2GyhVceVPJqgYHByqAiXFERuEt46kBYfBUHfV6djNRHKp5",
  "key7": "3nyeA2b8uVgd8z4iEuzwNZoN671izxk91ZGekFVyXJKZ2Rfh5sJgYyEsgfPLya9wiCo9xw6DPe6xuNFDAM5HTGsr",
  "key8": "2Q1J78jRqBRXaqE7Thb7KHFxorEUqwCLdvADU65XTgmxdEbUCJpv2YdaYHsXmjgv6foJdutSyv5nYNoJkJJStSaQ",
  "key9": "2M4WYMGvhK2KUPiPqotfztvcuSJAJvm2RTUot6wHrkVg7WnPbfe9xakcdxy4J6tTq1FMoc2Z1uG4Bv2CijS6QbB7",
  "key10": "3Qg7bhUnmo3JjmToVhEj9eFhrm1NmQsAyXL8SN7ASAHfonDJuYz8VobXRSwtTyFtR6h3jNhzGRYrPuEJcv88Hdsk",
  "key11": "5DKJBe331qgBx4e8tZir62ZxMWwDaBth8rrvZZH7tHxcexpA3Rriypq6mqTcYDKixoGZFnfQHeYJcJzCMJnfxntw",
  "key12": "iJR3FoSg879v3hgeVSNfMLnxe33CXvHALuAPMxW4a8VTKZ9HXvuT2EEhThGeAikx96YpAT12b3M1EvFfkrwKAsv",
  "key13": "2VEvA3DpV6ff42umR3MJjM5LDcEfj1HmU83kUyGvBrexRjrbk9Aw24Qt2VqBcfbHoLViZzbA35cFtDwpF52zHjQJ",
  "key14": "21xVkzR8nkJpmEb85CG97gg6bwQQmjK65VyZNof8QnbGBbJruW1VC7wNtpDEufRm95GUrAdAxQTQbVGuSccb7L5f",
  "key15": "fWbWBhNH8hac6VyVYDD2YzgJzLPDZjvaRng9UZGKMRsHcbkdVepzB891tA4D7VqWSVAhfQqMBBvyE186tTmkCug",
  "key16": "5yuUVRiztUqvEy3K6Mos1Cyvye7v1Yp5uVKa5YTeHFW8EgeTXjPDxU28XpzwwDEn4BKYJ4AX4JAAbGTcL7YszBgq",
  "key17": "5f1x7eA3VKd9AmUSNuJFrfqJ72YkMupiBC3M9ZWHtiSRuL339NVsF3h63cdst4dwZKCYBqPCCHFtEVYs9md8nkbH",
  "key18": "2f22Sb342SBApoShtqZzBW6FMJjEU74L1LrE4iDDHRN8VP3Kyg984KNQy639hoCAg6Ak3xZjULDyboewzXfQnMa",
  "key19": "5os2hhTJwzm15oiZriqE3T14B1zdHTqgVqNA1zYB4ggLDSrLB7nhxcZfyP34kuP3h3sQv3H6tPdw6JQMzc6DDEu2",
  "key20": "491xisc8SYsfNiFujmWqGQmjKr5cf1AXpWrW9TKRH4k1D58BLnsUAiiFKEctM4ocmaeGBeN4ULzntJjThqPYrnoN",
  "key21": "2YEXineG4Ax4erET16zp7kKpi27VWCrKCFhB7chYLe7iFAiboyfLCZraWaTorTTA2RMVbiW5hg3MwrYgpmH88VEg",
  "key22": "PicB1ANvdJCdznF6R9qsMPKZVbYFr3AJAUxMSjpFqD2BAYgkLuFiWy7P79sp8kWSXibqbaKwjtQXL31ZyxTwfDt",
  "key23": "4oqiKcM7hmy5kGGi4crUF4YUX1aM5Hf81ahGLRmdjKuxKoyTqyexynh7AqmsNUR3ndpjGWNo8dGJh4dgBHvhenzE",
  "key24": "2TXG4h4V48MBpqazpB33sruXUzLchifme8zyy3eNxwaQLGc5mD14s2W2smLL4B3K62gEKcNUsFNfX2Ej5g13Nssn",
  "key25": "MAWhKp5XHSrg3SjAHeE9fWEWrUdyXnQ3rzcHLzkWE9jzmVGCFG5gfP6Jha9zHUS8jKjECaywL5cFuwYJerZ5Tte",
  "key26": "4KidDHhYqfK1p52jVQrTdnvdLMA9bj1HZogPmoyqd2QDTDZHijstsW73eKEBqdibSYVvniLZjWDWhRmtcheLDzbB",
  "key27": "5zd4iTY4E2THHZNSEHR1WSnioXHEE4KLe3vc4Eoqr1ZpqTSAb36T3N6DhaHBF7VdnFaicZhi85ehbZS8RBVZcMS5",
  "key28": "4WtkchCUWxk8BiubUjXkSW5ic6q59tbLy2XHHxyRJDvXf8xkL2uJVm9p4ScdMDE5YvuTQL1ShfbuSBfFXkNTToHr",
  "key29": "5xhBtfRjMuL8eduiBe46xZvuiTDcicUFpcj8VWyn6WqGf8SxMGcWtTDfu7BWPcqbHTYimaXQeSX9MBGDmM4ajL2E",
  "key30": "3Vt8Nq3Kd4cFshbDMNKQzLe6pD8kwFJmCbMaa9APHXWKCHFW7jmohYM2z9F9oyF8wBfoZrAWsXMHPpoLHn82nd82"
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
