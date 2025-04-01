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
    "2YS2E2hRX81tpJ7UNoJZminUCLKhUN6Wp74mNHp12DZy8R4Bb9boxFTwwmE3aZ9H85yQWGfE1KAjLYgLdzmPPHSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Gp85TpVK1LTzWYHsDZkCWbF5zhr4KXAK5GGu6TdkxA2WUhxoTneLgjSBpCYD91eQyn3VvfrQenCncaQrEn7gnw",
  "key1": "BbU67U6QUeC9WSNFe1NiY8zGc3RYJJ9Kqyz9mm8uutYNyAZF1M6yJLP8gTcXw4BTmLKkrYq2S6QVYzoRfhGifjp",
  "key2": "4SvEBgNehUS25RHaJpdSNzGJz6rTwy1SE6CS668jMT1fAocKTipp5Z7TZDW8Q1xm1mSCj8M7vnGudcAADrsuL7fU",
  "key3": "5XUqnQNhAZKfV6bFCQZpKXtek6joUX1fvKAVMoZZT3MbedEjnGDeRwSAjmt4x36G6HUSpFwJuxNmXX7EhDJks2ZE",
  "key4": "2ZKJhDwpn4qjiQjM5xQmF5sgkRsEdwUHbcmbTUobKRc2VT5sg2eJAfXd639bz9SjAKBMAGdkDUwzVXiqE73V1zA5",
  "key5": "v3BKw4rNXBN6W2cihjfjK4kcyAZjku2wYDM5JTRPGdRjCWEVKUhWRBdPdJb1mAjxjaZonXDcEBFBP2vvamtBZUY",
  "key6": "5wpn19VCD1sjE9Tyx62Up1eNZiSyCsu6eSbVgi1iTBBYftTqfDQjZ8QdzPjqAawsMQWFzmtBaH5Jdu4VT458VK6k",
  "key7": "LbEsvs1xbAEvxPnsRMx4gfMSCZ2hakZ7NkZu9aq3N1GXBbJpD2MyN277JvLgYZ64qAm3G5w5a238HDAnGAnLNHW",
  "key8": "8fUnJpaFGJ8Vggrzon7z1dyP2LhJb1Va1i9satbe6Z2HjgWfoCQdhhiaUWcSUsuCdNtwUBZZYhyia8rBXoKpfZW",
  "key9": "4oL41LWWhBcrisAUH7k7M4TY3SaR9dUfFXey5WWnJUJeiUwSMPC9nPwsJBDBYJGQz9UcDjY1f1NcKRqCit2uRAie",
  "key10": "3BomAk7tw6k6RWnjHeULnYLt1ENauhvTPfaRSoFqruFeVzakhPQkkmFr2ABePwQP8msWHaP1MkL82xz5qLdG29ip",
  "key11": "4cp9pQiSo6SUQXZS5qTN53nRwnpeCkLAKscksTAzGdW4ggR5JrSNwzmdmN5tpDUKoSjTMfdFfo9M4d7a6xQACR6g",
  "key12": "5ibUysN3BgvzZ4SNUpqMxP7U54NRCn9DPHQVTDAuSY6pqnUAmyBQbcYUmxLLYHVr231E1u36XLaB9HXrxN3E3EBA",
  "key13": "3wwVxCYWr5Nz9zmLxt7bdYTBiEGgk3ZTzuurkKeSfNjrwqBeXxEk5xoVMZDiWFNqG4hm9DsHVPLYaUz5ZzZR1UiU",
  "key14": "45LdgXHCj2wuuWwXrz68w53jfmFzVMmrznr2ZX1unbebqr1XFHCAiUV9mUu4Ry3MNp9aNjE7Fbzzb1TsbEKN6WXS",
  "key15": "2Vunk3ib9n4TRp2oamEAnWk8mZEkqAPimnPoSis2z2vQnZJqsA1wJ2VcdjtsagNkj3RA9P9Hv4BMDuDuUxUWA5zm",
  "key16": "9PVQk3cjURd5n15AcCEfJGuG2SyS41gsUpD4WEuLgUeeENwT2frKujetf7KJ4HhGRJpjeoTzsadw4MUeUsm99Ai",
  "key17": "4x1STE5zaXUWi1Nv13RrjMBZMByYnfBPALLngddNQtyK1T8qUjK6RfMWkecEG33iRh4pY8kJXNh5yKnhp5Q3HFEg",
  "key18": "4mz8dwXqo5qeUpcoz99WbiNHGdKo4BgZEdfUzWd847EpdkLjKZXeFrXuMJa7a7MESwmnZvPYxkv75Tf2T5CCXvgH",
  "key19": "4FExF1bcYSxnnCzWc9SpHBcGpmeJqa3BuR3eE7C9P1GBqGXf8EjhRzBYhVnjZdTyqZXrsZ8vddyayjYFE8nCsiWh",
  "key20": "4qpm6DAnQXM9HUe9tJmfzjV6ZkFQTyWAYLcEfQNquaLbsBTdm57xFXLXgcZtXCbb1GfZuAyrxzd1ZNq7fKJEgUYV",
  "key21": "2wMuNnVRdLw1ZL6peGWrD5vPrZWvfFLSsezsom7oTZBspFh7d4XChNw1Vwp3cUqxqhodyYbZrKxAfvz5oXncNHLx",
  "key22": "4L48BSTNF9Gqu8a5MgC7Q1heGV7So8K3FQgfFytS41REE6MKYRdUpNE5kWcxm1CFRLcoaQFWMhFzQkZ67Cs52PUw",
  "key23": "3XNAWCBFhMBc3DmBsQgC2QXKXByGpuqngCpQHRxAERSwMgfDCscVBkEUYtXF8vhTCPbw3iSCLhGV1XGVdsQhXCjA",
  "key24": "2A4JDjpyeVyNoKdzjgA41bsBmFEMscpHLFLwVcyK9h5BzXJyHohpsXn6RoJu8gU9h8Vbe88KvALTZ23iVQadsrhZ",
  "key25": "wEZvfqkm262MmeJydRuJqNvMBmub7yLJAgDvDYwp27vXXiTTP7iBsgw1JcqT1Spa4FHzsLxDWpc4k5kgY97ovk5",
  "key26": "3btF69dtggGC639kGSYrGMLEwNJ7Edci2eTtj5QN4gAkeGQKUTg9u1WgPfzhvY4oibKeJBvNo5tFHDGeuBLePjGT",
  "key27": "5hQE3w7Jo7SZ5tHVAArbD3CSnb3HUdxV7AAWJdWDZARFtmjumUkW3PEKBKzbvvjfbPgYdN9GodgPNxo5jrq9mk9u",
  "key28": "2K5Kestvr3Kp3pA1qGhyjTizZcRhV8eS855ueh6LLVJBZn5srXjqrarq2dSbpwBUDMAinKLj3mtBfx7HEeaHhxJT",
  "key29": "3BXkczkudvK93Q9cQSJrY4wWjFW7ybZrkQaAZs1UE8JMxnrNoVDDbn3JPk2hbDQBuKmADsC29fESxa4e98itrWon",
  "key30": "5SCBsKEgaCq21yKnknjnJKfmQAKHDLExCbfqvxx3g7PhS7yTGy928BSZgykfgSMNkWC5P4xyT6EzKRnWdhgF2No1",
  "key31": "2qdD8DFyntdWdgcT2ixNHXnKSFGtsXfVLHc2vqZKxMLQyPZfA5PRFnkifzUQEq3ZmdUVC4sfmBuam9y3Fa6YQdBi",
  "key32": "3m7s8qAvYPkAgRWwojEzU3SDqdwDaZMipb5D1gWBtjWVjM7xVBSS58whe9FB3Lsdu3ceQ216wuDwV398HToiJfh6"
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
