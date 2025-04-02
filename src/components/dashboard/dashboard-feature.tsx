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
    "5iRz5LpW6jrftNGJDytyjwVb4FSw4gKPKZiPaV3w44ZKBWQ51BJZuWjhbJ2gnBSog2HNPorpmWWhbYiQZMJ9fuSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqsY2Q1eovpgGRLneFXXaNjHxmr2xB78XbbmJccCrwi4wiaTgHQ5ejMm4A2LYN6SCzC7rCtTPdasvQBp4pMLmVh",
  "key1": "rxds3JaVhA4DFuvHvfm7Mic5988AdV12fDDxKSzfj1NrMBoXEpk1Ed5rK3LR4ijmk43eMdgFgvY6PLN3USi5ebW",
  "key2": "3YcjweyY6o1unfkayyUUdHo56uYcFWWE657va8paj63HehERYPcb3oADzDTQJxnqtPtXLB6YRV37S9ExADbBR5xn",
  "key3": "317j9b15YYcsvERZGnZVsHMRP8ya2DHTL5jHAzdDDRh1aCquBLbuExPN6QU5aZrhGMbGd46jhYgSBxeGGpYWYytS",
  "key4": "28rfLuwATz2hvVXhESPafhW5wSCXy9QYJMaYsUDtcvs9zGVqAppZ811yxdkQV321B71XcT3eoJttgRGSEtQe6zwC",
  "key5": "2WGiYJAGWcH1VAP4HAS8i9RDx1rKBDBVLMqkVpPMmyzUMfnbxYnw3TfD5LHxnUZ7tW5xH24Tw6ZPV2moFCdx3Ved",
  "key6": "4W6nn6QXLxvFjnZZETfFrPqXgiWgBszx542AYuEkcG2B1TQubqaJcgL4sNvhC8bEQtdwZkr8KDa7T1KT1hzMq6Hb",
  "key7": "37nmBZeQnh5TGJBjCdXGC2wKj8n1hhahGgfhEWaGjpoxUdqBHfzKFKnhFHqrkjFPSWmKJPu1KtCFXrUgEURXCMH3",
  "key8": "34T8F7LyAmVuBREBJxCNyRzdRqauvVG5J7MwTtMHQJNsRVtDcAYmKPxWW9Kj158YacyLfHfPWo58qfjQWJ69vNm6",
  "key9": "rrXhfxdqGhzeGKXua9MMEKNLJe2nMTCLc9RCjTC1qbJz3posS2Qe8Ao6TAe8pBuGZkqsfRmnz2hmW9guULcRC6H",
  "key10": "3zuBqfD3osfdo1ZjudhS6CNk2jmCDqe1uaTBdfT133PhzdhRp2e3Ey8n1pNa6D5ejveAMrkKNHrP1bEHYVoha6YZ",
  "key11": "2JYGxZ3Q9pkCtcZqkGELADH2DbREnMPpqmthuVAktTZicWEBnsWSjo9aC58bYMtVh2eAD54KZXzDwatas5YzsaG9",
  "key12": "45KxhwuiDHy6hRmfEFiEareJsvAFYb4ZYvKBQjPUXtCsG7QtiwHzyzTLLLQ1D29pmCcC8S2xsNUm7nrTfgdpWhSM",
  "key13": "5QtA9yUgTiipaQN1grYenmnfzTmCMkToDHLJME4yQfZSbzvHCH7DCLyCTSCqpB9wmdUhurdd5mG2wKm5QEAi6NWE",
  "key14": "2jkwjRhBHDKKHf2VFjoTiLitntdHrrDixZZVEx7VVtPtswpyvcS6hMNmiKNaoiXKam9BtQWJHNL9wGgF2EzLB3Mt",
  "key15": "4stzcKMbkRn3tyUJp9bup4DDBktFHjeJwk2jJ4fepUXaYo4u2VWb3S24ZyxjBR4YeZYsNd4FxSg3hR863q255LKr",
  "key16": "2LN2Wy92XXdmZpYVvkU6SesieGuv9g7W6BYhZkHSFFCbU8pZYxK1Pyc9nAShGRRYKCNEfVVFHhaTHLw78uempoNH",
  "key17": "23MJXi5RMQYrZwrQLR2Z65px9Nh1VhgrXgWrA1a9yrLCfKigNViXjkSSeK8cyibGdVjbBA2bqWLzzrYRg53zcuRd",
  "key18": "4zhHV8iRbkiHmyDRuLcXiSobzBQroexc9ea4BhNRTHaZrMuJ4xauazk2x91YokBdxtZyNT72crdXkCd1qgZ29ovZ",
  "key19": "49sn7UG9jC6dU3yJMbHgeA9nEAaL3aAnwoNDqj6CYo2Z46TgVmzvXvLrHLJ7F9675MMPFFxaTW9XNVJHmY8SMdUT",
  "key20": "2wRy5RktonUnzKFnDYjjriRMjtxPkKXaowmJVGznpjTwHEV22cZTLx4Q9sNWp4f3xApHhE6FCt1CbQv3sUe5okHu",
  "key21": "3jUP83GLg8YhVyhBpMfXRTkEEt4kMM2ampL2j6G4PfQWqDAqYQrWocYmvbboTmhbytiAFkQAqBjizj5VNRBLuuKu",
  "key22": "ViAN3dKeXRKKL5Y4KgEx9mVVfVYFGgt7fta5jiuLBQSLRqUuNum1V6oM5pshnnqg33yJELb6ZcTzRJ6jbeR1R8v",
  "key23": "3BpBsXGGWW9G9Y79viTiJ8LCawJZJUTVQ6o6ifapPZT8BvVqmoZvZEyUx3QpVbXPQMXtb219mT1Aufp5SHkShQTw",
  "key24": "CKcX86EUzNTiWhX8eNXmYChtHZoFSwxPmd4HDaDc6nxB9XNTFGVeifGhEkYFiCaLDjfbTKdQHsNgmx4WVKcMmrX",
  "key25": "2EqJLWd54SX228qe5Gh8a7YGNu4oJRHPe3z22cJUgBXQ83yE27RG1oDxQrsqH9hoDgrc2DTWZx8YCEAxf9DLZQoe",
  "key26": "4WmzGnQzcVZMuokNfSFYfbBzVVMuSHvjGR31pNBXVEGV9MmhwCphJMRqxJDFw6kE9uv5LaJc1TM9FxZrYj3ZRbkK"
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
