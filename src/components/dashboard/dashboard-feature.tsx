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
    "546KgNQPfQ2zy2MKoY5s5SQ7GGfiL6XUHoYBp4QuqBQqSV7ubKb31cUnx9ME9AhoMMy9Kn8bFD1aczkkVe6K4JsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwySDRKgibpAWgguBpjtjpnw54r4he3wMDRd7oS63hUizU2Z1Ef6EHyQxirdZ24EsxC6myvTDnuRkJ9jMvQQ262",
  "key1": "2Z9Cr8fekfboU6W6eS72CT1ZVMsJfBfo6xMF8tir6WFGimBBFrCXDwdDqsqdPR3XN8a2hxWZTkWacHjtCaobozde",
  "key2": "44eZ3moonFwJiUNoim3oJUJuD7qQVkDEfeLx24i3pVSpbXUS9LzDVASE7HGDwdM2xY9n7cmSFAFynv8rn4MkX7Bc",
  "key3": "LbqRJvrZkoDyuMgkPts2BUHFgkTARguHfaqmR36P466VQVYyfmU4RWLiiucimA1b4hCqDSWmoGXeaxsWVYiTHmm",
  "key4": "4peRqxJ5XKwAKydtpgqjEDJu3qkUYQ5ew1iK8ZNcQ6jgwFkRQKxqEpVUK9oYMibA1DyxvNDAqjs4N9UPhVTspPTu",
  "key5": "5DLSP8tRagrUMvUZCq1VmuwqfvY3ao7nSrVcSJQ7hrVLCuDqb2ZtfQgZpBsPqQue6rc63XmwYNqdBYtx2pV2rG2F",
  "key6": "zCt1Qd4nKT1AxrK12WsYrpuZBXfckLxCb4HrujWXazA7b7TCzU6kwKbS1CZZqffRMJLU4n67UDYJGYfkgG2ifra",
  "key7": "26Bne7PCtAGsNVZfEwAs6w4nLjNvVm6Y1CdqnTzRvsXauGGPuT978kiNMCrCu9pjNzHpaDgcTQ8Pk29UKX3y39ae",
  "key8": "3HEMQd7M89nSgWm6fny9A2ea3BFbAzy2fzfn3nVamt88LNCRB16QPwtW8P44nxwbGkhzZoenZj1Bs28JAHnKMF6Z",
  "key9": "3GfLwjUnZSBaR62baR2DwJvMj4ieNdNFmaDQQNK5Zfht1HTLBPwxPKWgJ5Hs1J9eMfzvHt3aBBBBvRQgugs4v7tb",
  "key10": "5WaY1mwiiuuFvnDiHd1wiT98CESSgGqtaVFtaRnDRjm7pA5wwQY9Cz3bMN3AYwkAfjZpm5WCS8GmP3888b61gMaj",
  "key11": "4NS79U5RbuUWwXpF3n3zhKVYCB8r6nnPVuULtsCLwUttY9fbX7BQh9BhvMg1XH98y3NoeGrBwt4BChLbNbpmEdnY",
  "key12": "51eNnXFXdVmBZ76eFJcd3eDHmXKJPYHgwJZ1QyS94vDy4YsmPFo6r3a1e1nNhrirpnvsRBVtjjy5Wh6aGURae1HA",
  "key13": "3PcpjUhzjfaijGd4gDdx7yx1fSLFT75tzGtmsv2Cx6b9HdveRzT73eHKiX18cQu16fejWP9xGJdNFzG7iiBrJGTv",
  "key14": "2hkj1pPju3BURQTvEqjaYsCgjuXM5zUVNbq85uYc6FUPEsqgoeXCMoGAnmzkzejBBygRpx3Bw7RpegJkz5KrW1Np",
  "key15": "5mckomw4ssqqTLuViWpqw4ZmzvK5QskQrKkshHqArYZEp4eULjiYtSc985fDvABe9yyXxMB3M3n2Z4UfQdgLxkPX",
  "key16": "3Z1QKrHTpcbxYFXsxHYC63PbhKyRhQxepZLwLQmkV2zHEdjNJA9GHQKaUYixafQkc3vcinNob6T6osSCfDigvPmD",
  "key17": "4qQArGNFmkzqSFEzJ2FXuxvPXnKPF9yKmEHkotX5VHnUinKD9c9Xsp4utHZ9xUGg5eUEZksrBzaXj5yRkoFBBx5f",
  "key18": "5kd3aXQhvzHkiDX7zr1iqMoFhtsr8Yn2SEVkggQFd8mv13wCSRuwcmzJ3714kCXUuBGPbVP6uXJNEUdhR5zz1J18",
  "key19": "2B9w6vAxEk8eugycjrGXmLpdhmE8Lwc6sc7Dyx4RAYARmntR4bQsn3o9gstSGQFrK1pQiceedrMQd1EXc5udKkmB",
  "key20": "2soxHFG6B8XVDzaFJf6rBGvXBmNeHaVwgPL7nc8hWxWN2xECKoSnjdLpNPnoPrEr7FDFsWe8tQf1AgGm3A59R73k",
  "key21": "42qREqN5j7eTdqBXReqkvK2wrmG1WN3DtijiQATB55hSz9jMKgwswvjMXPUBRV91XjDRpX3prDbiKWFNqLpQTyMC",
  "key22": "5ZymQxzviWTcTYyHF711xdar9MPE5427uXRodsKpxmXQCF4rYJesnzqccUmp8p2s3nzTBrP1E51FYrb7M2nUk8Tm",
  "key23": "2Zq33ws9V7fU2ewyNtRUfZWYTdA8bCSNSXUkDcqVcKPmg9A1eDgGJUkXLX4DGzuEo4Noa9fRHJKfDWFtSJrsr1oE",
  "key24": "3g4jYdxdTUksQB4ee2XHmwLnU2SkoSLAm6W9tRiZQNcitPhSiHUiniFZuizqyR8wYd2SLuBjuXDrNjaeCT7LLdkG"
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
