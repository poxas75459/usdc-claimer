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
    "22tFRQuneSrRbHzrk9TApGMDHYZLQHavhVF9TfVvHGW9hkRQydAY997ntrXQFo5i8DWyXAaEQCCSVrmcJiyUHwxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ddG3CWszrBHmoevwUjd67EWxCnjwos3rUAF1VuKytp8ohg2JWyLG84rpyCeP8jHkKq1vPT2Mpy3ANHsVpkrALvE",
  "key1": "5UPm4yu2XpeS2ZAcH7SH8eBysCztUKq21oyrAQ4j9N6BXBTReZMFTMKceepsKzH9BMZqtaDqbscbNhVqFGccSqoq",
  "key2": "3t6JxUWG7kbshMDCEx9QNvXo5fikHAE7NikYLK4kqWXLjnykjs3BRohnrCENrbtF7kKyxH99CVcgM8tuZCAtctK8",
  "key3": "5YDGPA5yvdfai2hJY3TEUw72CeoRe4DAnyg4w1vT6gkU2eCXhTkEBbnS8t9s9y5qXaPx2f6Yn4DBuQ6RW2xassQf",
  "key4": "362UFb6Ki7tjhAfznRV8cAN1ghX8FFMZeb3ujtzmHMDs5JKF3hN9ABigBF7uxAXB84tiriMQatpgSB3ob7oeXZWw",
  "key5": "3XEaNuPcuF39yF6dbCsD9v4jCUfBpqJzfDwkR4pcDKkEbYYirSzxK16UQFpgC7D36SjuoiWEhpJkDEnmzEzAE85E",
  "key6": "23dQVcFht4ghwbXssy48tC5STJ2cFVNbVw241wCrF8p9RPXUycCwx8potP6pk2xuNusCYYWvkknUaiX35K2SiXWX",
  "key7": "3FT5WP8ZpjYoetiDPubtnK5q4LTBiwWBGkp1mAfdLdou4jGCDFcAoNVvjDwHFRQuiCkN17VosCfm857WVoPNXv4b",
  "key8": "c85zQQwuwSxkSPP4oGGGcFoLfjMQEeCb72oiw37LM1EwfWGDtWSLdnXHaK7KLFszoszALGwCAzBXB1AHeU2fiZ4",
  "key9": "5DW3JHUJnpvsm6cACRYZ2MPc49sQiQC1vX8wPpxTCXyQMhDxDkDavDeTc2NgoCgjLVCnjWVhatScSjGfwNb1Jjkh",
  "key10": "3cPBW78XhvsZKz1mtpX6qrqYLkpQrzoays9myZMyGwLE5QBSyEhk7HvDkcy5LPMEQpWggJmiHbsjdpyr6sLE1HMx",
  "key11": "3TKxuDufDPpdy6VmHZd9nASTKtKPpLpTVMfWHcv1J1BPCEUob4CwGHPWEZAKkud6o9e9p3UPgB4X32qE61Dgmw4V",
  "key12": "yGNgiRe5R3V7ELJ4nwrM96WrpF14DBaeEYnxkhtipQvwaaTeEo8RuiYBwxaYgt7Mw2gBUYubhGEFLuyT9Pq3sgT",
  "key13": "2E7gtitKq7aeKLJ5aZfQrxfB6cNNmSJ5yasi6xGji6XqPXW7s1hM6Sth4aEoWWxS8yizcq8GAViXD4XGpHTNEDfa",
  "key14": "MjznL4DP6X1zKVeDD5FaU4Mpn5Nxt5UcmYssh35mHyMfsT34YUZNzU3YQPJy9Q3wB6faaDZ9L6ZuP8acDHAwWRP",
  "key15": "2hoprN3YfFhxLxnXMK5LQwz8Xtp4f3niQytMBC5eiXCRcEEuPyJAkvkWKW8mo948JZmfWW2g7uAYdV2U9WVCbVpB",
  "key16": "65dGtoUW9ZYa9kABM5Ki4UYXvRRivuuSw8SwSSwq4nokMGFqwUYpJTBvQQGcob3ACBAttjcAAFZs7Ycs7d1PXcEo",
  "key17": "o4GX4MC5J5BPt7M4N3PbFj3boAcGTEqevciiJMwGoHpxAXD4xNqo165X4T7aYoxS4RBEwnAgHCmMQqceCcf5gNa",
  "key18": "2BZo2QcEqMRAMh6BgoSCQtfciMaGSLAxiG5XubRKH8pTtJhFmS1SHedB21gTDHuU1Cd6gDBGNuG5wGvmjEySpoDW",
  "key19": "2pKjAkhK5Wj2hkrSmaEDiDgVQQuKNGuTYqyk8xkgGmFhwvdjpprYXCBzmhqWa7AHvHCRN3DEuukzttdDtPv8qBPA",
  "key20": "5FdCaRtyGSGEiTQU5sd1tyHWJtgaJKj8SEC1rW4hPDR5LWyvce775tFzUcqZ8hKYARdW286W4jrYXNyLkCtVY5XQ",
  "key21": "3cWFUbjuSRhbMe8B1XJAX3j9Nu6h7GifUxfkyX5J6Ktqu5LXtSbGijz2ea2cu7WmUDcMNoJk6AoCtHUgixjEsUpb",
  "key22": "58QV26F3DcXficUS2BbmNDpSGg4xKPRKiDU6m4g11WaDSCdvGNAsPiqKzAxo8Zj15e53ujKzj6SZ4Dzj6xKsZndX",
  "key23": "ud8RbPmpfbpfq3j4AEdu6JjEYp8yzLSWYJuSBeJ2A74gbrqjtb2fmnNPTaXfFUmZLRNUZ29Lx4kFYte6tipXihF",
  "key24": "2p6ncwUhSgDReiut1fGaAfdJ3T74ezovjEi5PfMsb9NQVnCE7UHhqM99BmRhGwXrqJuSwpZh1FAGBQ1c4nirWWaQ"
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
