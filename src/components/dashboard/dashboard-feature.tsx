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
    "5nLiCUHMx3kG3WZJmqhb5QyZfZYRdnPzcmgVU3aQhEsUG298GJf5df79sfh1CcKPHzW6AGyFyN2rZoPvcCM22zJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxqKui2EqWwCHsnAysP4gtopWcGh8oXw2SLyHs5B2nkYhMWxAUKkXbQvYQdAzAp3az2CgxgNJRQTdupmZJNMdMt",
  "key1": "3gyV4jTui62owAyuGgazLSjEFWBskW5KPjtTmVTZyHBCxvMrmEw55iQMhyVf99ftrCBMSMdS5J1tFhihxmzyXmx5",
  "key2": "5XYQptkuBbqzas4xB7Tc3Mn7Hwt8UYfGqRxviWuMHw4z6YcCZBP4hCPpmvca51ZPmH9yetdnJaELPbZG1gcmyFdU",
  "key3": "FfKp7e19SbBtpiDa88pLvWH8t1K43vR9KU1WEu4TyCKcyHKgX4uZ4ceqx6XcYFx5YbojxRq1UdQgG3e7J4CC4e8",
  "key4": "3qGSgAr72R3BpHapkXKYppCpgLVutmKvmDAVAmLSp738mK3TtBddP3Xs1vJ5Z7gAYA1pFwMwb5yNVbJ5xj8HZ37V",
  "key5": "2BNMcTL2JkQdahwvUfPbKQytHoDrNTsGwPAWqedCtFMBZLPdje446a1uLxjy44VsVWEGcyVt1Qt7436iJcXUDbEQ",
  "key6": "4KVZG4eyrisNauv63EnMN6wb78im2vs8eACt6P5ysdzQ694WNFLNsWn2hpxtu8kPYH6UVUQbFBdPd7eSCHFDNFE8",
  "key7": "66HcEvNqk9wPYsgm7RihHB3bKiA4fMsEwHoqgXp3EvfzG8ok68tQNXudFWMySMZwgjojD9XVmepUtmyF1vj67i8K",
  "key8": "Z943CsuU7zi78bHKAEwBGQjDbSgXfhJQeheyKs1rjf2EWotiVdjckEdwDxvWuyZoe85VUZLMFQxs3jEQxkGBW4X",
  "key9": "2cLHACZjemVVKSbrJJHRWxBvWLjb49saSAYsMxBQQKBNDCKcnbqmTPEv86Fnz5UfjqZU3k28ob3HCcmk5MCB5knc",
  "key10": "3d6KTAWrKSZEdHfrb4UGQcFjRHSgJRBN8w1fQp1bLiSdiiXFnmtvto9m7KAohwKiEfDXP5N86mbFRxemTRCW9nKi",
  "key11": "5xUUQNTCoWe3g8Bf4se8LsxXZrqULxboAMWD6rV2B1y8DYWw9QzP7NqjFa8GoabiZW82iabqgRg6SfgxGPU1kjLX",
  "key12": "g58edKWRhaTbXLC8F818tb9ZGT2DB8rqf6hDNLcPu7eQ1txx3qcFMNDuZm6rdAUins43UX8qjMrfPJHa6SKiVDs",
  "key13": "KzM4G8QCzNVH2K7cKUTV3ZM4jXVUNjrEZyQeZNxQNXWxpucAEJRpvm6EXUzNrfuApEnfasybEmmJtVD7T7WHDpi",
  "key14": "4QHVfwJYjFKHEE5R8XZ9UaLDRKbWUYsKkmEKL7TciYV4AHJu6Ld9YmzMUoUUUjWWwRVqEBjeqXqNdWELV4o6eEvp",
  "key15": "3B6T5GkiaThpkYNe6JK7t3DRGHqypzqsby3oXiKsyDR7dVXHoBjDsq8arJjQ9vrYoyLLCCNmSvSAjg1uQo3pbqBc",
  "key16": "3fUYRZNBfueTHmXKrfHGrSVVhLXreQYMFsrhhnxMiTfc5YFeGSsEqS3ZukNxAAA74CWcVC5kxWs8dYDv5o9w6Q3Y",
  "key17": "43C2aDmJxrcUcJmMGmiQpjuVZjFakKemnNRV4zat1JvhZHEfLiXwL6NC9pkwP84jUSCU7MbG83cViWFwjTrfGSXD",
  "key18": "4SadW691qQywS531yAmuKQtP8z6YSbTwbm9NqK7FvwpM7RpqR1XKXfTAc2QVATWV3uUpE4UgcEwoUJ2keqqF3d2Q",
  "key19": "sX64rvS86WbJKWst4ChrQ47Qgcrs9MbMRRZLgGTM12HKcoU9dK2qaBaygsCy1Yi1BEY2YV5C2Zwmoh5iZh2tAp2",
  "key20": "2TD2g2JL2oRCpuc2PJCNL8wefcxnG3dithc3dgLoGpCtvXmcU5F7HCTcBYh5tjWeXbx8eDkrnxKzhonQmBA7mZPK",
  "key21": "wL2rki6b9dCyriBT7xNsZABcsNyAGu2sNgs1cc7gxHRT1LpusfY4dxZWAHrAuU1kQ9PweCGXndzXmmLXcHLPVRr",
  "key22": "rEknGrL9Too1Gm17yNyrBia6M9BEHm1QRmAHmQfnC8JPBrgGsYdS5fZy5sVBPijPZreDuaaF61sA4W3RUpxUxZm",
  "key23": "YJa4VFv8Y6XgZdgVeJHhMMGbMNjRJwLDqfWEngFz4qFRo3Xep8WQaiWubV8MFZMKKFSnAnEgQXfWtUxRk6LyWs4",
  "key24": "22gRJKUb9ZVh91xwSpbXGBGHNh4q9P77zMeuRXJR4vmpaX8p9qSf2ZmZzzKNxGgu81xmKB4eDhN5DuiUX8kuZn8d",
  "key25": "2jWvP6nvRLvowySew6qJ1bLSJRMuXv44UcUspDohPy8nZY8m7MWcXHnAco7MEJt3B4wmX4B1t5N8Qr3EdAAaR3Up",
  "key26": "wPS8jjVSBpwfHpkqRXXMpnDEhNay9YEdK8kWL25im3qhWy91UpiWkJ3imhxgHY4CLp2MszZaNfaJUJFPmZidE5Z",
  "key27": "QYYXdHgkB2RUF84QLjsUJtM3A1KKNe2xTozwbPADKQhiy9PTgYrgspvFiSivUw4j364N1Xna3hs1ms7i35C4raF",
  "key28": "5WpemFNqRb5ycueFC5YvBcovRSfHEsovabrfhGe3cRnpkPGsQ4wcD5ChBXSrzP7hdt4QGemFY7JwfDRj7KohYNNZ"
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
