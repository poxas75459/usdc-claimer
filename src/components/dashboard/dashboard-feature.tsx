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
    "2DyrBx1rWqbx1zv2a5pPoJRcLF9hwerrXj3L2DKunno5E7cCvb8tA8fgxt2WkKDFsyBNityjjCSMks7qtrqzFHoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4E3FPjjY7CFi2jNQhxBz76JUexHo93mZ4Pz8EUbZssyxJHiwhBxxkNEeCzbZZVdVzfb5dyJd6ZTrvNYL7KEDnK",
  "key1": "5vCVHydERtgwpgfheVAqCGbqigmfacPVBh1ZWTqZjA8JgiwwVZ9BKUcBkZcdE9gTDYkCDW9pRDeNx32bCmnriba7",
  "key2": "48CpSY9R6BfcmsjLT9bywKxLTokgbq2mCRjJioantTYdexA2sMonYPuPRJgyJh6d8QGcvE5PHjtKHzTmcT5jKRd3",
  "key3": "4YSGnn4tpkK84qjKgAhV14WcMN8GKhV7RqMNLDQoSbvMApXiC3sHf26afAmZZg5xvNHKdPJujgWadJYosGeRwCwt",
  "key4": "5div1RsLFkywAxeJpAkHfU2fDSggitcZdTwgeBSiRYHZSc73jxYv4ZB9osyjZ36Z1duT6ejkyzVxFmi3uEspaXjs",
  "key5": "2Ud1KtcLZPu1WCvwPcmpZg9NVHaKga3hCc43nHQn3cK7EhmsTcDPcGmzPLzUQUDFpBoGZCDbUNVB1S9m9WvFDbbP",
  "key6": "24ZSYyDEYXrTZREJMzZsXGk7eb8AJ5fiF6apoL64DW4ch3iT58EE3oKWz3dX9DiuGRRmDSiMTXHogAgka6mBybXd",
  "key7": "4ojkQT4YBpgBFhDpCxRjYtcLZwjPTMC8rrMT1CdGykx3wr2goWgqLZPyrpiipFQC1hP3PyyzGKWvRkMSMqvXRm4A",
  "key8": "5WZhM44KbpQye1nTxfhtr6QwEtQ2MLFxej42cNqvoNfj4JBtrEaGbcdZgQTBGbXtCxtwVLV4uGXBE1dXsMBG1YX4",
  "key9": "3KGSrZJxSenzmoPnfDAJoJvUHurP2mkmUdYAWRUJcFgkZ8bgQbyAhTChF3pMmPMPbZJnCoSJmwnnRydLZfVGdb2R",
  "key10": "3DcfazDw9Yudw7irDcx4xq1L5Rcr68kpahKRouHSaZbe8bGT8CzuXBZgh1tjLFskuqg9sHcv54h6DQW3doMNLXJj",
  "key11": "3K3fx46T7ZQyP97qSkhhNbMYVAtdUwG1rw25RxbZMmnPRXYhAioYHnzWuL7MUht1nSUaWKpyEHVMaM6XstRi3D5A",
  "key12": "2r4qQs2JVDP6Rgk9hntDBDvjA6is1AYVKSaYk1LZRszjjTtxCd7xz2KyHjfYqkBeimEq3dUsXGP4apmizyfNBbwR",
  "key13": "BCLFyFsCtvoQRHBynb4GJFsxM1wpBnonJkY7fuVVyWfKzwT7U6WzTkjGaPkm1cKeKJq4xSEusraC2dpLo7fmXCe",
  "key14": "4mwxWT2dnRHctzmwh2LmY1w9MLCBBDkjpAzGUfmy3ypkgvdmZtHQTr1NzbtSRBdkqcBnVwxJpokDUDEpAzSMxawM",
  "key15": "45Q1FY1Cvq3DKcL2Yo3VLNUBA2G8ZLSBXYr4EeSSqAZ5a8rsDg3dKm7gvDDBPSteubKfYVpfKHEtKzJx7DTMpVWS",
  "key16": "5qEmaiH61kHx6LGsLVDnwv6MUpxcDrD3ppPDwwPADQ17hitweMwVihosgkZQWHqyYEv3ABAhXUMndZhtStWz3iW8",
  "key17": "3zLWzqV86enjSCfTqzMmh8dB5VYMraCBXzTfgtZsUZnPEWU2v1PxLriUP4negMTsJScoFpxjdKKHHD1yF3xJkncY",
  "key18": "3sprAi4hcgQ3JTHzdbiKSeYD7p22LmtyMG8VAUj9UUpR9RkaBYyvjcpZCoY1NVRbHqNhqLPUidCmdsDkvANt95xw",
  "key19": "4oa5pTCCzX9pHdnLjVCxTqWTm8i4m5RpE8vhxi15Rd5xRocMMytUtP3Y1VTLNTkd36H2DBfXrkNWLagusurj2rVR",
  "key20": "2HkobSPbxobSaL19fyoFhSnKwJ5o2LutTuE1KhTcVHHKxC1VBnKXp8jC9X5VcnyTrZgLbzuen4EnJTdg1wvFa5GV",
  "key21": "2cXEpdJdAzXegyj117zDY4rgX6GdXY6vdpV8gxjAqtNFEBppZhAzDorGh6tHdCUcvZJTajjM78PWnVDSADPx6hmm",
  "key22": "2t9DThH8WXLo7L9QStA4EBQBVYRSGVKb8V8xmWMbpK3aM21qnHV5iZhpf3aeo5QForn1KCDQT866uDocGunaXgm5",
  "key23": "4ertURsgwxjRWMujBRJk61A6LKAysjemWfkJvie5DoQu5wtR5qY3gEGCUfPUCAWnHQZPNaANHWNsNTJAZAPaeyq9",
  "key24": "317eZppEPTq1iD2rWtyuJSPgLSzZU19eGq3AdTwq2JvRgBM7MmTwn3Agp4XdHMGFNWkdfunFfoqX5Ck72cJeZPis",
  "key25": "3oHxCbrudGxtw4meuB2D77xmy9Ea5Mtn165ycnYqKN2MSgjyo4nMxQab94jzKGL2kdhXLBXiiFzs8pwg6zYXjNdN",
  "key26": "3rvvVwN7Y32Mny6N1wKUw3sR76qtWuUTNdWFmt5THz3z2oUKYo26TsY1SvFwd6ZXqP5su3CHcmYmo1rT5gFXFZeA",
  "key27": "2ZXwYB7HH7Fsawf9cvjA1Zv1uUEvtZfhk16m1Ky1mxSFHwFRDoicrz8p4zumvimj6PcbZssWmu4KLA9YnS8ZxeU7",
  "key28": "38DjFAJvuSRdNpa5anKBe5rEczrdhwE76jLWMRXS3VpXXturqyNFTEQYnx2VqWAzuDgbPCLbLYi51ahX3w1okeuc",
  "key29": "3CznER8d3yAYa181yNQXbKH2PthYAbErgVvtdkpL4KjtMWXQkZaPFs91nXkNWQH6ALVqr2bR8SE1aSYTWCsBLDeu",
  "key30": "4VwmX2LqPFLtzeotNFnY8Q7q36R9HEEySs5cVDakP3Q3LQ5VKu9d7FGFjbZBoPkpy4Npcjre7ZWD2tA7fNcCPdYD",
  "key31": "4jiJvagCJMYfyLQp3LDwTeDPtWKuqRFGQHhMpjKTXLCsyyuoFnXae2jqqCMVEzqga2NkLsLcb4R2saAk9uL2ehXd",
  "key32": "3n4JMb2SAFhxYb9vvVV4Ro9x2fg64xGkscCt9f5WW3hzXLisTw8T8FJfCARRytKyTCEEc9kGfvwAcL6qPU2D4tA3"
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
