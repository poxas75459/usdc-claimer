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
    "Mz8rn7A7Wn5jPQQytyDqJYnMbNi7sTF9EVLLJZpQjPjPqJpHrX58a1Ux13DN66rehjhA3SXCHaGhgzovYWYY14Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnradhc6k9NM1kPpVH2Ju26ES1z7UTJ7VVzQsLyo9uFZXibvneVDCC8Ap39WNcF6Lxy26Dctg36LA3EECtpHpS6",
  "key1": "49up2r1btjXW4kYWkD3tDMZwCJqkduBm3ozaJ5y2PnXsThww9muhmXPXFPdnCayH66UXPoY85UH4MDQsAbtV6uJB",
  "key2": "4u7MVMkJpZWRpz8nFHdAsYKc9niNhpiocSGnVKKXKgmYaycGHFiC6pKCURqhNTvdrptiJZQ9n78oBEup1pV1Qy3f",
  "key3": "4QY1HsTAvRfsPh8FAFiVhiamWVPAWbg3Z7xZ3frdaqDqeus5TJcBw12kCmaLiA5pS8D9Jd9tMbZryzo3MuR7tKsV",
  "key4": "4AH9MYNCxNdRbE8L6oCrQoi4fFCuX4yYawDjrKuyGk7JvXtQp7yjBM75zEEWXcu99mSFFM5ytZthM5DPawiceT56",
  "key5": "3KE5zMP6vdYyGQu2CHunQyDettcjszo1WdbvhMUfXdihTQt174sn3fUoqnrwcGsh8cmxJ3yWQKi9cc4gJrPHjWAS",
  "key6": "3g32tjwASKuNAaKjokfnEwV6bwKGW5XFbY2qT53tyRQmcSH4MUrQyEZ7P6bYQRMdiFbZ3oaqTDHD48ENR2CKmVaQ",
  "key7": "3BMk8584XdKdGAQDnLzSJgB8DX3Sdt9ReQ2K3exwD9Qg6SKqPPUVNMzhr7Sx97oXEDtzpQRbwC5LD2Y15qrZx8Ca",
  "key8": "3atRTXGYhotQCpxErqKZpNSvRNyNXA32q9oaP2AzQSfTZz7gkYagn3R4w2BALYkHo9VU5z6Q6ciLE7qj3q1PmPit",
  "key9": "2Hg3ZEYqRppR89eLBx8etiPsm7zHYSJx2osrdDq28wEDV4fV9o48B3M8dddmWQsu6PaG1kzEnEoHs5kYwGbTAhSz",
  "key10": "afAdYcQkngkSEsSdbu5rvEvPgDcZ1dPTC8grjfdJhyjfoVSYcTZQccFXUf92QJgs5v4Fe8nMa5oURFHeyZipRP3",
  "key11": "3ACnUP7D4FqcSvcbJ9oG8Lzax5ioABqQpTR5S8pekEtZNonjTA9XG9mzXAwzHgfY1XV5CttGyvSgXkm4jNSiJQb3",
  "key12": "4qqtToG3qJyD6EmpE48tWqtLYnvxhS3jj68q1Vspt7ipRdsDrxwaaVXznYRXf2Y65ZNVtQz7u8nYTSaU7BwVpGDR",
  "key13": "25LELNjbBiFnmUwf56qfAKRz1JZBxrmL46Cr37NH34bEsLtWmy17v9RAFp4pwtAQ2aUjpp9T5Ls37ZaRDPqJakA2",
  "key14": "3GurtacKWfJGP2XW7WnX9kDCx4zUJnm3qASLxua4CGegcNUUB2enFvVkfPLB1zDpnSGaG3mVD5zo6cXF5giZbST5",
  "key15": "3Gn1xPv4RRAtCUGJMQHD8DhWyKHHA1otSGkpEF5kefh6tN2o39sRB2jmy8EkKsf9he614bQRuXBqkx78vo5gtFsm",
  "key16": "4a22Bc5xns9kYjXoqkBDAE2dMU5o5xR9ZK3oia9GJT8GXiQTTkZoE2HeNUFAQGuLJSw5y51bwYrMNqgoEhCLGbrd",
  "key17": "3ktAHRT78b13PtvQuSfR6et2jWbk4EDNPGFDNpYg2yTkeZGtu6jHHrZCq9NeN4YiZwoqs6JGoVNi5cvf1rDG3r22",
  "key18": "5FACpB7d7Q3v9ZvHUkUXANXcVmK6ZPr8EH9mSUULSRhJHFwnmUrt1EJdaTvtEiEieLbszZYGPzeqLxMf9iEh2aWC",
  "key19": "3HjBrPGWRFMoqJtsDMDRtnVefLcMX8zGdJGQFDSfJWdknYpJaC8bo1FTUTHkH8evKSW5gSPJv7M7oJ9qRP9dvQMK",
  "key20": "cwVKF7mMrEhNRZoaL1J5spYCodPWDVdnSiaPYVRrD9rrEakjb8sVG1n1tR9JxpGrHmP1g8FiKpMhiAiMXhjJvGG",
  "key21": "UJnrNNxvqkSz1nAWyLe7VYr54vijnGhys2AYReRw8c4SMJoUaUhfEEFhn7jo2Tk18ijVgZSjEX17XeN3wdxM33S",
  "key22": "3LaZ7M7TJQx7F2XBWywgR7ZjgouZvKxUe68sWno2g3FhTZ6i6Qx5j943jwyWxhBh14aGopF6YgVNBu9s6anmRD5r",
  "key23": "4uwE4Pao4L1ZwgwNpvHvjaRXahpkgSrACVXAqeZsFChcmkDapVpug5gPkGRrcoLvnPoAJ4WhCxMD8y9eXuXesAFn",
  "key24": "4n3i6wxXG9xFgj722mkuUeGkoAwVEewdN12yua9UsJuhtmKKQc5eY3X2BEC8nj6W8cBrcSWaZFF2pEcd8CNycaWb",
  "key25": "4RbnYjpuLicsXo7R3as8XRRvta9HwY55qixevQQD31sKDKTennC7VyeNXaRaLSVf5o5e3Nw4iEk9Ebhvzq6ZYA4T",
  "key26": "3m5ejnjkCNuVtbYQzg3XFubm1DhA18igtU2RsSZ9xBNPYVrYzJTfoidbYgaY4DtGmmMDEBjuonk2yawHFYGUDBjY",
  "key27": "4QwSToqhDMqcTFjxe8HALSvftodwRA3nhQw5UVpE23PQiegzB8JkiGaZpf5uXLPdp5JS1bWYNyFe8RGUfWrhemmp",
  "key28": "2hUwaKgcVtFh8MmjgUdqH9PMaKMsTKDPue5kWXHq1GZdFj3TrPgNwsRrGcQWcWU2ZpRtXbw8U5EyoPqreuh21PuD"
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
