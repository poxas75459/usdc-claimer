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
    "4U5orTC7VcmUQayr1zwg97iqir3soqoQ8bD6QawrS1KdRJvyr2Yjwrc7Y4zsu4coPQuS136HiceSYGXaUQpgunK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2kzRo3yNrSG4JfU4aiCUuzLb21dCNoQ23Y6DKfMyZvwbmRAudXNDDkxHWpk4XM3K8YxT5uFNLjMkr3Mxpgdyoc",
  "key1": "5kyReYjEGhPxpdU76Y1YhUbZrVRhpfiGm1i1sbt4JStFhSffXMVYCFLmtyqBFL7Z9Fm2WT3HbB6zhRjxa3Eu8RYa",
  "key2": "21PUUYTiKcDmcFXz9GmU4CZexcBM6nezuFrp3QxpThPBZSTbKSGb6n8pYZbxfcMg3YvUD9AtdgmjF72sB32pewjm",
  "key3": "oXcf98PGXuifndJcgkVFf4Dr6hZx81GZNzWU8b1zSh7GXr8xD9AZiKGScTiFCo1qmiKndTC4tDMwyCsH1F4pUWc",
  "key4": "5kgaWx27N7tDj1aBUEdcA51uiKm1rNuNpDFPWTzqwWWioy2THAmDZJKm1NrYLA29NqrxhjfgscGQuJ4Ujt92MQ1v",
  "key5": "3g6ZCMNYMLew89YVZ99yDwxYwUjSAV5QLd4NTiTtRDDG931zsvnYLA4dMueQcP7uczQrYGWntEG9an5dFPaqE8zs",
  "key6": "2j9g73BPazaAQhKWLgi8CkC1ah32mgURQkpyrjdmZb7oLNnKcP2ZKKmvi3uL9samhgqyYokNPg2hg9T2w87o1EhC",
  "key7": "4EaVnw6VG2gK8AbT599NJW5UYC5dCZa7aXUALjTbhugo1vidwVCGeNs45Nwjrbp6jcEqdFiin2p19WN2hdq7xmwE",
  "key8": "4nU9x6ZTcpgdZW5aAgaTq8TYEiFUCvrK1yHRg7hsH4aqMLhZY7a5KWmJdkAKCC67Cs3gNS4tLdy9QUPRsYACYkhh",
  "key9": "4fiPQwewsdCi2C18HDN8Bzh3PnTe732KRy5xyidvZUj1oMwwobi69Hvex8zHMhdqrH5SyaMeBDXh6Ni9WLjouiHa",
  "key10": "4cPNjjda1puMyfLJxe7FLM4vW391CTtBPYnatjVexBMgUV6nagaJdD6xpubiE81YB2kKwmJ1okckVqxB83RVZzy1",
  "key11": "PbJ9qGqhse3YQNEyJJhYVMgx3QkVJ3odG7GXoczx6hBGS3iUEVwUaYuAc7RZziSw7ZW2H3faAnxztVRktA8eUeq",
  "key12": "5Dq5n9YK6psF8aLtMiqhSx6wrzjKQxB8m4iUHCs5CjJ5ffyKsXC8i21jVEEbZHttSBBmFcags4uVhTmZichfggcg",
  "key13": "2mowfLLNXe9RrqTWrMkzmbvbrwpG89BkuCRFFxopMKFV2mbVF7NpJDkY6tw2sMGLmcFPNugW4bnUeowLFnf8yodZ",
  "key14": "5JmC8gMGTWgDgP4RfWmYzSkoFT2G5jEFpYntJ69R8a2qtropreEzkwesHDChJ3WjaBjipaq63xfdn9sPv58S9GzR",
  "key15": "5ZZLSS3W6ey9cyzws3HbBoW6oNxqS4dbeWfPqH84SKEyLYxU22BCd9qXxgqKeQYnzQKBBk2R2Ru1YqPEsS4e2hfX",
  "key16": "5EH7j8CHzdYWVZP7WtHSCQpfTbsgsuuBGzLY7qmCBgTjkhJjTpMiyiQ5JLdrXGmTxyLZudo2x69n7ST9sF1vxaHw",
  "key17": "4xVtsohuJTBUxVZm1xZ9rhPWQLdQPU9E8oGcPTua8EPo3VRapu4ViaoV96Eio4QzXtijQVXSpiigb6u9mTxVS5HQ",
  "key18": "5QSczDAPcJCw853cXitzMHH65otyiJ7FKNC59oRbvijsDp7rGdFCZbJ92G6zyCRyCJ7N571azkJrkH1AWAf2UJF3",
  "key19": "5g3A8egz5dz1NJ4uZYvdAvKktuXji2HrcGm5NJVVduY6BhKwtqSnf4HEtjByBTyMZBXdRVmL46vQEXEFU4MmjHmc",
  "key20": "5yM1aNFpYS7cLVSQ6G4FzmqP4du6NZamm2bUPMiVXJn2QHMjeXdCSEiBA3S7n74DFcGPZKqgCzTZ8cECggoN2oQF",
  "key21": "5u44MLcZxQ1KAzYLzGK28SYMgzxxziz13xFnNomxBx4JnV99EL45pK5YwFcLQFwF9rKeokPDGVMWMqch8vF6g2N3",
  "key22": "5NyaDbVuYm49rVPKE8Wd1Fd57xzMPuVPQLbqJRttnpCfUa397aMKib3RiNwcsbuUm6yw8vpjivUuRjEVgbsKR9kz",
  "key23": "5jVxoPMbjzDzeiaZcHHrsB5kmEhLM8TQjbfqhjAnkhRhiTccjUNfNZ4JfP7YVnWjyNF1XDEroFA2Hui8Tzq8MHpR",
  "key24": "33gfM91H277ifqbUUvhqi5r6CDsnLkdAowLKGbCQrB2VVXmy2j5L2LF1VtReMTQdgs9Q22Fnzqyqp2cerd1EgoC7",
  "key25": "2d4mk6GcyPj5UWWBVwvAUvVBVcXQqrmFn5aAQoqho9MFKzXErUc4dNpq4wa9jEBkXqdzTn9Rddo8fjN8iiNpTPcf"
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
