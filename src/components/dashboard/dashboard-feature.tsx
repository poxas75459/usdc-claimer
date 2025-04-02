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
    "22UnRWTatG63bmYyEF1uoiSeXB296dibc2Whu7TSRdnkuwjebY5JFNMVdsUTpCZV63WeETczGKLgYzkDqUDDmgKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJULbt6dUqfkBTvH9g8M4fMe1FgpstRVMcxfx87cP7M2CrCtC3A5x1wfqooTdmk4j485zwVDtrRvwrTUgEd5qAC",
  "key1": "MJ1BdcYTsKxCzuCZs8kXZxvxZJycjdFm95AGDTmQ77Hv2j9vhkrT849RHZe7kgmf9XFbmWQBgLgeQjn4hgYHVkv",
  "key2": "4mFchyvxq4p69cpSoQHkWtr4XZAFLC4Tc16LWbNk8kVswurq3B9FDwCaHUwJVLdQrNZGNj4vo2o7vhqi9PW1V7Lw",
  "key3": "4jn35pkxCQcPrtkzz5riLjSr5h2DPZu5YZy5yqRhHzVy8p51bKskt9oxktBzUoaCgvy6M6JzPtJonuXA1C2mu6rp",
  "key4": "Gm7XobahH3iGKPD92t3MfHLzdwP27Fr17cDMxEzGcdACk3VEZvQMS5pzCHz58Dw4aWSrwnD1eN2bzayM5sNmHYH",
  "key5": "47UJogUkL3Yvh5tLDr9RHYc6X6VWSf356GY7fJ4MiHf6BBXncTyKSCbMqQ85UGDyFiA3agRVj6265yEqjUFYjXth",
  "key6": "2itGDhXFJSpEbSavxchJ8AWEQFN7fa54LAkuTQD1hZK8RT3d7saLcRx8VsTUC5cWMA6sB7PCid2SK2b9uGfLMrqm",
  "key7": "L74u4AhqDCubcoU1bNDvedZu49bkuU5Z5qFALe6KWqxmVVTKxjjJV7J3JdUfkKUb63pKSqXsfjCi5xqKYWHDg8n",
  "key8": "5PP1nMKwPSf6z9tKPpNNb9faxPuiYc76VSML156xks23xJpAjFQ4nsT8zQfFqoaY7izCX6RpC6rVwexUxX6e1gDm",
  "key9": "3cL1J7FYrEToF3hFAwPGE3upfFubPEGzX2KFp1HCBLWGEbxUBQ9TV3qhoctVzMHhN5y9NGcg2EacL4orKN7oJPG9",
  "key10": "3ZpDTqJnD2ioZDXWKcNidmDoLLWk2vB6iib2mrkmL7HM1ecAAiQ8iexMSxg3XG5MzrbDBT8XwSVdvSQAn6rKoqkV",
  "key11": "8ATWkVN7gh5jRFDYNuUqzPDpkQqwTsQja8C6y8HgqSbrvv7VeumoPQ1LnMEkGjxgWWHyXMMksceQz1DhHmM5zFo",
  "key12": "5z9uDZ4g9f7AWj4d7m2gMsSkeh7QzBbKfdzNPSrGXiJvrzeiRXW5vMZHR8y4DqUMHV2o673ugGgUwnayYZQCkyC7",
  "key13": "4nBuS3rRRkdLqXyiEKCXoKUB6HHNpGKxdpVoPnGJSrstECpiX9Er94UVRgAkhQxx5YLALwXMe8kmaixYpwuGfw6r",
  "key14": "3UMwsEFbJZcdWQvPhP1QNeSmKecS7FVkK6gNKJY2b2CypRWHhU44hxZStEHgDcEUmgddTWNsFGQPtFL6RXQmtG1B",
  "key15": "2reHRFeXJSZw52i5tkwAHLfEVbDNpY6b8Mz1EmUTDffhrZvBjRVmEsTEW7S8BPbSDeo2hyGrXXbZFhe7yYAD3XX2",
  "key16": "3fX4Kg3M6Ci4N4rj6PyBGmshxG7y723aoaQuUqnKud6t4f3eRVfQjC6nmNHXA5jhCixCMqPzQJVK4rBE6nxyoTgv",
  "key17": "3Z521nrppzfFgYLTaVASxfkXhHpdkjEsG8AyDvMqTKhRwuRnn7La7nwYv9VKczaJG1LGbpHq46Y53h1uD3xKqjLs",
  "key18": "5oJi5kk1DHoL5HfQSu4mTtHZ1xNiehz42H7HLofdVLG6yqqsDv3U5YJB7mtYXBpsfYSkRzXKQS6mqbJv6wvSFtJa",
  "key19": "3VNguvig1s8BghL6azrnga8jjGy1hsEdKqoJLMpnQTRdC1qRbQ2DAxunxMGCNnPvi8SWh3X2eiCkjGv2psEQSRq",
  "key20": "bANGzLKEJ4YfhRUur1qkWtmDfMmJXZU97rLEFoa7jEKgJh2HaFLxWk7Pbn8JGr9V7gYrjYsYiNa1kgB6pojnRRS",
  "key21": "5sp9jQb8VXGHB9WouR2jSCkwCTVhbbxmSgH3My9R7LNTGScZrPkmNFFZo2oxkMU6nzxEmMW7q831RMBUPtCE3a3V",
  "key22": "35dSt2Ag6opKCf7H1yLkL2c2vtbR1vfe1zGydGfF1qSwjPiiTf63Q4n9bhZCa3DKHFd6Mukfi1w33RKiGwdmuYFL",
  "key23": "2dKrnBxoRFUqi3Z4VeGbWYyuCZTbC4mxBLGfXAW45sZgvop8aDASU9qnknjMDMhLBBLHXfuJDY7LeN49p24bFvb8",
  "key24": "3KTtXDvzTQFqogAsJ439rozuo6X6GHXBrwW8nx3fgWePgM2FvS7opoGSktrC73zz9oftkW8Ec3ctzV7nj7LU561E",
  "key25": "3RTgMtKkCM7aof1RcpXwKWXDiRLVGW5j72iRSK6u11kEA7vZxHpS4s75trkLwDATxosPSujLwRQG4LRv14ganNWZ",
  "key26": "5RcMcBtL1bMd9B1vT4G1rukDa699KLR3JQ76sy26caYQswZmUA1ymh67pfQJTPEDrhbFEbPBFaj9pyLZihzBT3RD",
  "key27": "5QCDdwo5RSEJooWZGUfPCAtgptCnYxyE7FvaJvUiaXPc7ABkEnvu6YwhZnh2NaH34PFXz956iyCJ1CQxTFhoQxvj",
  "key28": "4SZuRWFkpfkqsGmmQn5e1jSYZuJvrVo5V61dYkDckQgo6dHHwUXH2XZCsLzWDxT844vbdehuomQBv1wULbzwBrgz",
  "key29": "5QpYpuY2spf4L8RKD39cWmK5TXj1rqDXSzJ4sqyP8LBxtuhVR6bRvMec91iSXEkAki6quvcYMTTyr7ykU1kzZKZv",
  "key30": "4ZbeF4wi38PJLotp7qTpn2ibuzh5xMJ2CU3DtynzAnhHGB4ruyRkGn1sqnUuJo5aGVFQwp6p3Mz3naticorsshjF"
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
