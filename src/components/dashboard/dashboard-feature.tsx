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
    "hMFECm9xCqigy1yW5KUDVBqcZZYp5HjYaTsoAG8yzyn2chVKsyTybLAHtgfsYtNzESu5rmNUGanCgBeXYuGjYAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9g971AXPauamYEqQao3wj9kVoMuijvatutnkZZqsKHsiGU5RovKHFF6jiGP89kFP44pERgLLYW4aenH9GTHsXj",
  "key1": "oMjnoJs9A46H55NN6gCKmTYxQyMhgarhF8RjifQn8pXAVvYF894gXTVHHPPPXfAK5UqUcJV9LrrG8ZUv8EuNLoD",
  "key2": "4CaR1dkV45ByU4ykzCHxNQQZVmQWJru6Mpy7oor19Bkjirbjbrkw1RAyom6yLzCmqdVyr5nRcb7iVPHKKMZRTuy6",
  "key3": "2evbTUcVEsRd9vYJjv9c6bm6nCndMApgd9KYHTjcReQzy5MDizTx64kLBqmJ3yNsbuRWSmMdUMCjsa4xCTYMNqE2",
  "key4": "wHMAoywzvRJEu8RN4s6Cui6BpXhtTtC9hJHJFgduE79qS9aZSCcwDCJjcwM5y7fTj3NSPxJxuhd9zthNGgADCTS",
  "key5": "4JPyExYHkPLxL2mbGfwzdUyuVSF3AKAqHyPCzB6pGXmZXdsRUi1wXtNTu4xzZgQQ4dHkNwrABos17XshbmEKGRVy",
  "key6": "4BXQn4DH4jaXWDEZ9a3QTqER7HdHvxvQwTLNZaGgAUq94RVTZ2Z4B2ugZnmWDhTe7eubdenmYao2FDrzSHa7jAF8",
  "key7": "4X7x63gMapBVzEsc3aMtkhNx5vYRpUy2MVPtZzGMGE2K24NF45XLKTeVXu9V1WvXiJnv1VuUmTkNU14Ab56Wdq2T",
  "key8": "56FZVjUF6syjE56nSmnakXuFpQBq4AiCmwDQVy8R36c8989X9NqbpX9DChfBUM22UXhcqk2X7mPJFyBov7uteZPy",
  "key9": "438rGTUbVt3yPgwhwi2LtZfPYweSV2kLBzfadjUgCThtkzRSgtT3en28uz23R5khNTbeT5PJK1R2roPo3N51YRtz",
  "key10": "2mS5JSj3H31hCqJrSocMVty1hh4CUSTUXZEV9JC7ggs5Pyem5pnpLCYVcKnPsSGxhxQmonYt2Z7sUTp3FUo2tne9",
  "key11": "4bGmKJuqvogit9U5QPdeDngAP23eAuYo7oTMmBXcN83Wj5YvQx2SzuhhRSGEZYhQUShkwPDBkvWrCxzu746NhziR",
  "key12": "23ses5agjdsWNBb8HKieYa4NfMPBr9kaNhTfBxhMeqTnA3r65uuiscmfZTcd5h2233sFrcwCfGRoygTvfAkWjTK4",
  "key13": "5QfJRjero7HadYDMwdg8GHBXTcgS5qhqoeJQtvSLEuM1P8o2VjaJzpnwxJdwds8zM9PdJXhdaANcHSYnyy6kYb7q",
  "key14": "3n9jgKrgJ7LGF9uXfmTNLafd52GbYW29UtBM3BybEzEubMPn9jxDHamsKkDmR3J8PoXCSbaPifcLDGzFpomPZYQA",
  "key15": "bbUj5oRwqVTGCFLYR9VMreWuCmMveZXH37Zgm6BFgYTXd55wqS6yoYiLUKvwA8N3DwFh6iZADsDg4kdZgHboXwv",
  "key16": "4aKgRtGkfB7z1WUBk9Vq3S9DaU8pSHnMTny5BD8ZzNCdHTmqMeDKApeWHKdomo83S1jnKWUPfWhXt2g9vTo5tHdu",
  "key17": "2CNDitHukwWiFc9U2S37UBHoXLQNJzno564EMHXXYrAoRUGz7yt2GTp8xGRRTBrQukbLeojZ1dxNbFzkm6Vm5VcL",
  "key18": "4XNGh8P8Qkc26NQQxBxeA6ZmSERi6YxUidWFTBia4MtwFyXXNhgkSGFo3LoVcPs1aPGAiGWHAhJrC8n12isdA7Yg",
  "key19": "2W1XNnBCMkoLE1zEZnMZHRPz2Bu2WqfYM5c5NsMvsTLkKrbLXFHm2yqcxouL33uP2LCqAK7cbn9MouENmQiooka1",
  "key20": "UzWmwqzo4DDQSnf96KUEGezCXfKZSRK3Y1sgE4fzV3mRb4vqCngxcMKFjzzSwcQxvrvyH2fYf71eHKa5qNCEUG3",
  "key21": "5T5x8eE4opDjvgKVbmWvtcxxDHACkKWVgkvdQakdbXhzXapNrihxarqejDhJ6o6sTW3WSas4aKwNh9gMFfjqnhcQ",
  "key22": "318PLHE3FJNTy5ST5zN8WmmK2KcRC4WpKmnfhdK9rf2rVZoM771uKed6DMwMT4u2JL8KgmNRk85Xcm7vQQL69YBZ",
  "key23": "3ihdZrDZ8Wt9kqu8BBBso2hSNdJ4wV7BUM3HWQNxWTXp7tLqCCEw9pVLEQxVVuaPpFUEdoN8NjSv2M1kyoYjSZ3t",
  "key24": "2rLMcabXsXGwDGFxWGcLEBx8jmXUeGaKEgqNcSawtLymVrw4j64DANg6UwsP4vRd58xRR3w8EN5vDz42RNDFnNwf",
  "key25": "2ZSkKfB8jxZU1rdEhcpJWeiwazNeXB6ydrMbvBogP2cnLq7DpoVefmoa6mvfqZyow9mcfFetwXEiXoo5HaWGHyHN",
  "key26": "3Vhxhy79MFXE1x4bHC2VYGgFRfKQfRpE5Vsd65Z4y2GUoChLno1v4G7kYCdB3TVtnpqo9AvfFmM1usXoHYbARFMf",
  "key27": "4pni35AeVJse9dPYWaqZbdikxSryfJxR3K4Q8D3ma7ArRBgctbR3ruLej1KnZMCEC2u2cM1xFbvh5UFULfRNxqsX",
  "key28": "5Ldpf6XkmCAGp2x6cbbZ638aNrg6qvdA7FeYo91eSATx8A79Rrj8G5NQ75LokfuCBFKv8qR3cEWqSvPGG7DyZbES",
  "key29": "95MmhYQpkaamxXerNqxrhvvYuMiCq24s8FeqfmTRz5RQTHtxRWVXiCk7PCAa6MtD6yVw289AFivrk6pg9cBYrpf",
  "key30": "4cuKxk8uG4iVn2GpgT2sxMmhEJekpK8uFMpHjGgMAHzmqidt8P8igc8xdMuRRbf7TgPmG3QMZUDeqL7a99iD8Pfs",
  "key31": "4xPN8C4dWX4EE3LisHPHcfRi9rr3bL5PSMJyw7Rns5nu4H7DtoY6wsXcmMs7cwqDtG5LKmUGWB9SEzUVP5LCgPqN",
  "key32": "3V8x2KWaYdQz8jTbt1fKoy7GAk51Nb6fa5JzswvyXRMxsxYs8C9CbcKZLguBLPVRACYgT1CcPs8MH6HMysbtuxqk",
  "key33": "3W8tyqBxMDmQdpbtoiDerSuHXkWaH5ztkaeA3sFLNDEshC2Ut5Cq7MewnMgdU6Jm671QR6WsLe6mXCjyQC7PwaZ"
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
