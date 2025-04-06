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
    "3ZUG6uYfLLZMYWDbpxgbFrAnrVbEVycpkgyooTdaymfdtB9dvf31NMii3gX58EZ3hwVU3H7DpkBxX2GQ8NPSnQbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PT6RWr7FdPj8apa76dBbsiWTpaKZu494G7ByvShaqfqwMctJNeYU58pfGBgzmv8wJ8qsendSjgEZ7wAnCsVPkgt",
  "key1": "4CWZg1BEiWF6dqqQ1d2uUwP8wXYLWPe1d4RxKEecV6HK1ky7jEeWGqvTwT7Emwk1tFcoB1GhedEkFSFSso7hEHHT",
  "key2": "3hjubLuPEpkf4MkE7rKBgafEHe9dxqEia2ndL4F7CeHk8u4gXGUmJuUJU3YMU93z9eX6n7UvxKFdXAUy6KjkgrPU",
  "key3": "61FFRQpn1uouRJHHDNro88LfBSNNnShfhq32WRSsFs3ATDCDYEm4XgfDbHQZ9VJMVFu3yNZpUTyqWLSVeM3LfkvG",
  "key4": "2xhVoYzJTRNn4mbH8nKotu3qGnQKqiqaZF8nh33PwhohXqMCnqdTuH9BAcus8VLFFcSq1MY2zsJTDA1TYVGbPL1p",
  "key5": "3U4jhhEfpVXVQmeo6r41bBpq2e5Up7cQiKttmwMcjh2F5y7snFpMZryJPF68U3mYrJDY6C6DV6EvwPQH1cjcLntb",
  "key6": "xx2cDN4p8Mmrk8Y6ntXGnPRP2CkEgMyGtvcsPyoLRVtDcsCYPcWASAsjecK5MfiyYr4DmXRoX2CMxCwSs27ZcFE",
  "key7": "3KVv1QeeuTHENBSz8KbvjMDhb6RX7rRBkFsXRbtvML5dWRgYM6EwrQ171egAWTAvb5pzGb1igFpZwyEwshBiBNW9",
  "key8": "2y39Kwz8ygVbosajjH8FhuvFvwwM4TQCe78nVvFGzrEjsqDW8X4fDC2vhixYQurXpTkweKmgtcSuH3pu8gDv9iSs",
  "key9": "y6vSNW5qMRbAkhatbN2gpPZw7ga7d2JRvfSLiUPEmLcchiQAPYoioBWrdCjEnUM2YyXwMFxEbaHCeu19842cWtx",
  "key10": "5Pw3R4fMBY8cdmMV8uz7iamRQKt4QgVnGPK7LDXyLPnwKwu1uHqRQVNPTdnfZBAqBqbWY2b8y9N1A6LqhzbNG4gy",
  "key11": "5HpgA4Mev4kVV7btuAdyGJ7e1qPhi5JupERVXNdqHjLRHWwZyV1obTPf9SxzaUYS8rjMuXrMN4R7EMePF2XSZ7aF",
  "key12": "5RUbemG8sHv9eGXmGaE7ADhyXrk6r1cfq3AsbjfrW6dCgVA8SC7o4tYJEMU3KXGkcNShQcZoe4nU4H68y3aSmdgQ",
  "key13": "5JfzE3pdpV9JymPYdLJc5xSgypnbRiW9MEqexu6gWexc7BQUybvgHArJ58c6NNXNr9BoxzyngBhyEJba529bjGxu",
  "key14": "2G4NZVdEhpq9WPgVQdNDynfDBXEXeLhCDzgyU7gh4G5maURCGC4TCEyrX5rGNcfJYxzTpM1ciKTd6rUFpAq1vu6U",
  "key15": "CPrpYY6bUqCpdDXYY3ChZUToag2uu4KZRReqD6PWERPDyZZ8uRs5AQtvYgrUaMXxwiKubSZbaTPY36bQJocBG5o",
  "key16": "5X8zSHQGmaDJLAqwLXLoA2kyLcRVtusif4Z1pQ2f4kHvfqh7VGxtJsub3NvmFiNkW2i51fFRM1EL7vPBvrQwdUYj",
  "key17": "5vtMdey7si12eXbpfLr7xJC2UJUBM2VB2BMfsquKy2E7CR6DcRB51E8x7AQy7YeUEhJyQBbxjXEkofuhsUC1atf8",
  "key18": "4PgbnY4wHWLwajBUB8KcsXt7Xypmj3GCiaDvQeECjeHLdqQYXimifTwfUgNJR6B4NskDGYJe989s5pY1eJJbBdma",
  "key19": "5d9ytAPw5YXpsCKp8uawkYu4ozfdZ2eyrUuWTkvSWCfhibYE5ctnW2FvZghjWUuc39gqbpyntNSheeCtYPgs22rR",
  "key20": "3R4Nz6B2zXb5RJy2Y824Cbo3TECHKxf425zor93LrsJ6hCHUnVVEZGzZw35TiRUT3XkgrBf9frUQvvrhQAGHvSwb",
  "key21": "4UwQYABJwBuGDPfEYdvMuAvEM6iyHxExF2oarwBiavTFU24pUS5TEkdgfvk9W2G4Tfh3vqEZtXhzym379zTEc6xX",
  "key22": "TNyWW1yoR21MKayicZgikbKTrvj8kQ3YPSZvb1f6q2tN1BDTCeBg95ogEFmZnNSCmSvY7mJ45pnsDRzu2RwXpdv",
  "key23": "5cyTisbTv8aqdBQSRTp7WckRK8A5H3vcDKLfEj187BvMX6dokuZihXViZAEGxbMGgvJjJs9keSDt9jaUyNT3P4gE",
  "key24": "MDRcDWTM7jQKrRgmsEvuGndCjZPNCyebPs2Jt1PUcxwrQ1jkzUo6GhpnnUc9RaFj7cVbFtNLF5iiL55NoU2Kiag"
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
