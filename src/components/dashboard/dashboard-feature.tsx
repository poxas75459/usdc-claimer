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
    "46dJDnxZGLNiqa1kP24fKn65J4dvBERFkptrkogAK2awk7fJdYiDNZrcqao4bsWUxFpsqHginXLyAN8E4fNjqyS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZmqTyB4xuecNmjkfcAfjrHpip4VCHJ2xjTyGHyoDo8K3xtdsKG9nu8QFzv7cx4SCdeXKJC54SxPiVJ5F6vqodu",
  "key1": "3vZyDpLxAWz8CGUJQSpcbDLMXfrQAquKDfsaYbxdLgXPfVfCPhkg4T1UYbb4rerbwNhZygUtT8uBzSBLPFXt19gV",
  "key2": "3w8WBNKNY2Ax8JgU2YzXGD4rKDUWWzy9rqWufuqFpju81JDbR3wgUk8JPQa9NXXvvrbPGPxFGNy6JgavMd6gvybi",
  "key3": "2z56L5jnybNx39PXXDxSmiNrKPeXWzVuKXv8D7HiCQANSW4eitnZui82iHZDwoopwpkS4MkPjB1UfmAev7QdRVyD",
  "key4": "2NNgGcmQGTAZDqZHbDALcquYUAgmhoyq8PH999SDcFY7c44LrdfhowewC3sMoQvBdCUuEgyJ42UGD6UDFova681t",
  "key5": "mn2HHACLhpARZeYexbcnofLpZWcWxi8QA7YHR9Dk97CumxLdaDwuywqFVtf2oYVozCcDNeGG3f5mRxiAmXVsZkx",
  "key6": "4V6AW8jqh6oddpQ4dcKbqGSBSN1oRYjsMdF2sqvN4ZeZrGHkAtULU3Cwf9Ut9tGpdwxwYRcsQHeDTAfpgUFBmVhY",
  "key7": "uiM1vSEpsQzoXuZkwFpHM3JW1gso1Ukxq4CJ4GBFX89Yo5hajzKRm7HFcTTty3M7tDpsuCNbqzr4tYhiMWgMZd7",
  "key8": "4FQB4ypFjs9miWJPxvwML4Epzu6FUnQsvt1KGiroL48fAmqb3BDpKGdm2Nk5vSwqEC78NtK1r9PzmmzgZACuXYJR",
  "key9": "6HKo2D2BDThtsc3i6s6PLB1EgjebFmGsESRk188VBXBpoV2SzTdPEajpkapnRjRrTomzCJMAUg8Lr3Az96ivKB5",
  "key10": "iiXk9Sb7ceckWMfr1odP9pMJTYzy3U2y3H1Hf7kBeg49giNQDUkkCeum5yt5YP1A8b7DLxBwkxFPzHrPfBRqYRK",
  "key11": "4zCsQEMMtxHw46Auj5JuPuLkMaXzMrApXeEWevsRs5EvLoMjwQyq5UwN6A82eJuBJhtbBu8N2X3MAg3i692pPfEU",
  "key12": "2aBKfuzFHS6FGR56mj4tQVMyuNTcjhPaDgU34NB9AqpxvQ6PEBgacJwFf4t68sXjahy4Nnas3UgcN6dREGwPrDr4",
  "key13": "2ppJU6EW4oPekrFjovnPMUanGQBNBe2Ssaw1wrkApyopmXjxcFSfQ5Z6GvAFMkW1oB1vCLjtTn4gMDmeJ6k7XcTJ",
  "key14": "4AExoRZu3dMXYxoa1g2ZpxBq9B64TCCFtg7UKYkDfYq6TNXakBKfqZMLTgkau9vUjGzvAuK9gGbW2zc9edS4NACL",
  "key15": "3hUS8qiXifZkMy2kTzrch6yenduHPvSbEgSzms81W5qYUSJ49Ecz1E2VmAurfZfDgoPGsThD7wQigDtPfYwVaBd5",
  "key16": "3zXcV8LZ2syXiS6754FqxRZWuu62MuRSPu8ZaATsD7VN6ErSodyQU5vStbCetCPA1b5EKZvYa1CZkvqQ5AjeAUpx",
  "key17": "q8Dtayx4kA24iWAFcXXLaq9hbatPKxZNEQwwAQR75dsc4W7SvQHuQJNQmnnnowxjGzYbkiAzefCrUmEN2xUPnuo",
  "key18": "byLdXdZYiKVDysYv5xGJdtZNUxZVnFZRjtSC3GmVXWxKVFCstAzfHE2UD3WQJRnEswnTrjHQLKzWvkQrs1nDHDd",
  "key19": "4y6fcy2qzkr8sYdLCg4c8pEG43YTMWbUKayRiC3kU1BoGPUqrPMbGL7XinaaQJbJhYw79CVzKxXZzjYbnXfUHgrG",
  "key20": "2BkRp4oD4XSDEQqcvbrVymHVNp1W5bDNhwFmD3yMkef1JUj66yn6gFwfB7UHSRntfkj8rTAigkQJRVaVcYfx1rZd",
  "key21": "5oiuaTy6dmoiwCCvUQPKMpTaVNvNpbcwooJkkoB7CepSZT3frFLQN4FbACmaemehb3LgD68UGsGfNLHnTVHgCDxt",
  "key22": "pwhxZrDuNiv3SBikXS1gtWNWwmEZSy6xrXFnS6KbkFoUggAY8tSM8PDz4jKYC4fyijzYoB2jHT5KiEJU11SnCeH",
  "key23": "2qda6jsB2gd8ZdU3iTEVXeosHfMEFhDYVpyJsSVZiJ2i5skCSnFwuqzJPGrDnsFyo5pDVC5UHS2DgDFdxGvDJYD5",
  "key24": "1PAx4VLLQSgLeNbhHveXvNxDx8k4tu4MT8SQhn83sBoZiDMRUkbxvvhBgauGx5hrxqp2SzTnWW29PD17fTXE9pa",
  "key25": "2jKEcqti58AuPj1SN9KhCZ4Y15S9M7kLuyG2N3XVYCXRZGbg9A5SBEn3WW9Mx93wknbQf6rwshjWtG6JpDrJbnBF"
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
