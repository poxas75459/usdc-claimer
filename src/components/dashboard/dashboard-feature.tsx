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
    "5HoMK551eWD8vBVLi9nEQaFK23bQyZtXZaTqSHskpijzTGo5j9knXniyxrFv24jDmDGZLPV8c8MVoNPvnjSHJs6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZES5GxxUCRtjoA1kz4pNjvCbN666B95hVrtZLHxS1SqoYdPmVc6FVfmhZauxniuLuK11LZVgCAkPZr7qep9jm1Z",
  "key1": "2eVfqNAm5VPCppPMZc1JZjVhzSh4xFETnvMaHqp9AE1JoQiP4nSdjjUBJ2XTXcYtd7ma2mUG8fCRQEtvJHYWkgux",
  "key2": "2psVgvaDhfWWkMhRmSZDwqCkdMTsZ9zMxS5LgL53jahevrseYLPuMMbisnfkDsYx9QfoFdG2V8QAGQ6kYRZMsH9w",
  "key3": "3BNyQzy2jjB3SrHEArMxibfRyywVHzjoujej1rDYWBouvtgR5ngd1wtEzzr9dVUqpV6vJcqUpp6Jh9rWEAtkAJQF",
  "key4": "5Y6HqLWJMhK8Bo8NWDzaEXRhN8s8kEFrw71cYpGfCtfpJBvt5sW6Mrweej336oNTdodQXDFtZEb7nPD9MmxhymqP",
  "key5": "RL4cxrsiRKZ2U55hC7985T3ruZEsMaJNTXCk1ibeqrAru1rN3XQqv8xbMnTWBSgetMJB74vVH5abVEBLUZVSwSb",
  "key6": "2Ensk24G7dXBdQ54fzMZjCnqE924FLsHmPf99ZJRd4CEzKXeFKBcYLM5V14xcJC5qRRJytrVMyeS2jv5RdL4X8kA",
  "key7": "28R85UFjxskCay4fPNLa5gon4zd6NjAGsNuY3ME93tLrrTocZNH5w7T1EPN4XRcE62wp3q2eBMgiifmpJkbZT8RA",
  "key8": "2yUKmS9JYyE87oEoWvdqauH1VvqSe8m31JWa1ZnKSkVgQDf3amvDb3uct2iqzapvRTpXDC9EoLyuCJESWfAmHjPS",
  "key9": "3FBkw6nLzTwkk8R5Mgy6MRo1aK1xsBAxaZQBFY6JDLvBvu6ntZC1vPFpCJzXM9tkfvzcbkYZrT9XJEcyTYrGDiDe",
  "key10": "pec1v4Y3SHQJTnLboCcAUJh7PXmLD18EaVXvGV4jz9mM6e9mEqhGNZibvdJG7Ra7oEZ1mQh7jfuH5bFaW5abm26",
  "key11": "4hSmEGpW5WBvXad76cXPy3Sp9bTjNDHwbipqWp6Nt95hGZJd5bktN2mZaUWTRvGiwPUB4bTbzfhp7AHcZafwHcfr",
  "key12": "5aiLDjL1T2tQBsCaGc2ME6JDeAc1uwYriaFYf7oQyojY8yT4GCc6T6vfy2ifWDjQ3HyxXo8RvaQLDFAmxGPSscJm",
  "key13": "2MCVHD3mENG6ftSGcTMBh2EqtEYgmzzqmMicsjWAWE4gz23Dob1D1NY5M6VM1ePsCgfsfuEhYJeEwQTEiTobbN43",
  "key14": "5SoF6xiHq9UvN9kR5QsGepBXLbLf1a9r5LmkLZni9HcZCkPqF7Wz7qH7xvpwAsg1Z8cEm1GynzG5FRNqUqWpUhvW",
  "key15": "3qmYBPW3vLWfb6TuAXfpCGg7jf9PJ5GJbquZimC5gXmxztHAcJds4Fvz7dsHx8cjAVbksVe6SE2XEaT1ennx9eU5",
  "key16": "373haR19sgyRf8nTsV4UsQWHYDaVjUGY8VX8Gf8ZHD6gyUuDoW8wwjJuHi9PkJ1KFg1hfRrTZGmJXTuFiPTYbxU3",
  "key17": "2FydzzBRixkuoXXKfouyDebBRWwayTnY3yVCKa3DJkNEgK3eDmpDyDpAjNrUBewMaQWawS1QDccrA6cHRGseXnwu",
  "key18": "24LAxnzAmiKjgNXuL8KbwbhEssXHBWj9rpAUUP93Rvcw982AFuL7Ki7BpFPhXEfrodMBUVd7LyKMoDxX9xmxu17s",
  "key19": "unbg6XCFMt1gVzHnsUTp9sNcqxYTwqWwPFjuXohgKSE1mGGT5Zhnije4r268ZyebzsmtpkHkryP7t2YXxksWUwc",
  "key20": "3qHkELJBQbM3vE3hrG8ayv9waumiHmH89gNUfCTJQ4PZ9ExMY1gFCnqrUs1LsupdPfEiQJP1uhTpXQLkCY94PQHs",
  "key21": "55w2bEh1AVrkxHrjMmhXW5oGjPVJveWaNbamobRavwScA4qqjCkragm2yj47kVETXrn1xwt9JobTb5YdVuu2tFAP",
  "key22": "5NeKVqCgJ5qgLqVStiLyDuTvADk8B8D8aKxx7D9ZFNYm562kN5y5p3o9iXpzqoh8HSXvbBmv5YFS5UCPeY3Ngwoy",
  "key23": "3TpstMV32a95CUJFkAFT3uobX4zSWs8fpwaU8Fsad7NnPsLN7Xz5Yj3h3RK7Zfe4jRNHjj7yDbzqx7nwLcXFRBdN",
  "key24": "C3odjs8bUsaxFUT5heSGX7PN13UdY57H8rBETMHy1oVpCRz7N8oCU91qMyALr1oMEzgkXRWGnhJq4vhaNnqPjBW",
  "key25": "2tJwdjVXeQAw9mV6oDMX7wehdLXo9EQMtzcm9VhhMxBnAmsgGrAt8EkLxM2kBEGLVsYPtWx9SCm4zFS2D8qR23X3",
  "key26": "2Mm7enPo68SiyCza3v6dMiHAQeSmsGNLHvkreEh9NnK6vsgzju1WmPvTho8pstuTvUofmPcbb6YUetazSXUdMmZP",
  "key27": "3bCE4oXxC6pcjbRPzaCwBZAXjdwh53Hbc2M4Tk1p3qEESsucC6t5hkbgbzQde2puEJWdqr1evKVEmUzhZ8tNa45M",
  "key28": "3HpgbWPr1Mx31kjkfED4qa7ktjEzwpKRM4BKJT9enveHSUZcryFKTDomWduF9kpnXYmT8CsYevH5DEUKRfSf51sW",
  "key29": "WMPRjHCa2fk1KnzLETCPtL6qqtEC1dDaUzkB7ruDVhUFiyZ1UAcZgrnU92EPAQSzXUiynjcUS93FzJ6YouyriA3",
  "key30": "2ViSLYqBH182yDsWr3bsW2xoxC1G6ktMFQq2cdwfEmm2DcF8rEV1JMfHbJwPo9jsXKvXrR1v7icGCKZShph3a1n2"
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
