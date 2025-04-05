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
    "5dkA3zhPHUnPu3rts2UfAvARe4Bwbr6ZwMNg8ahk3jSiWsJaQhNjB4XoZobzGiYwVvtc399hEh1rqAAT67Aehq9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4113mNQUz2FrwYfb2GUAUHZoJugTGRacnboxhuqyTZdfx9avGPcwJkH6zS48FMVJyBoqL5FPhnh6M7EVdTQiK1T2",
  "key1": "2PqHZ6MnTYBjrZyTVP5ZznSGk3ojG4WE3A7bULCQLZbkyAYaUTAbRwZ2Qyoat4iLm73xiK217qnzzgSzeQYqebCj",
  "key2": "2ecdf1s5QZy1tfi57wvV4oyk2QfUorrUfSVoLuRPJGBVqZHj15CoUwumSzDe6Jk7pbKb2XYfopuTKGLCMe8ModVB",
  "key3": "24vmZ8tnFUCVronNQwebyzBA5v1c9BBqPJAyFsML4qMcrPEEzBeZHtG7d5ZLzwdEY2gGFKC7Q8X4fUG6CxBJPwNt",
  "key4": "3nH6FeQ3Fn8K1xZcwiZ72b3Gu8HvxT6GNRV4j3qXdk78rxj1tS9igSDsFaPnVDasSU2CPogc591ddWV1aCqNK2st",
  "key5": "2ANvuMseqghigiSzbCqsZc9618EGMy58puxFzA1AYBnKM3qh3m31wXfcxz2M9a9bNHZR4PzRurqWTH9KiPsf2BHU",
  "key6": "65LwAXjui1tA6DGWqwnyt5kCyQJNEnHWcLdwtAjaEZuaBi2kqZdCfwaLdWS6tp9qqCwLBkfLXEiftyBWxssnEaAV",
  "key7": "2bEYy7q173zf9AnBXpxVfGWCuwzTUtWJEBeNSTY43Y1Niqn9TNj7o7ueS6DYhdQqsaBSHpDBDHYTST7yhgcHgSun",
  "key8": "3dmT77ZWrnhiJXAiMHtbSEi84epwYT6gaaQNX88fVqHzE6LP8LbvYkGHTaUr6rrZfKA5pS4MWGqisA4UjaLhWFy9",
  "key9": "3cQk7r9zG5aJvZjBhLMvQTMTfEXa55PUFmpkTmviP5quH7JuLauPe5HEXqMcEU3novoYkV3qSBE4EqTPcQnDG8yV",
  "key10": "56XwYbnPN9wkkQWJvkiPmZvJKhtwZ1i5Ko9Pb8MaKZJvPiRdfzdiwsaL7oozYBvnLvYySS4NJhZcnq1riiWocBSp",
  "key11": "Z6tXte9xqRF7xWdv3RAA8DkdCyrRqbQCa5PVDhgCmYU6ShUZ9ep1kYwQKKa2TpPRJzNomg7oPW3P9ybEgnH2AAW",
  "key12": "4TGhhx5RBFVDWCR64XJXoc86y89ejZepb286FGAWdnniaJ1V9BXvErhJRBL9enakXcSYUeE5PJeKfLdasyrSbzHw",
  "key13": "2GeN5KLp3h2afUshDT8tUa293RLHqWec3kEq2cs5F3dErKjgeAEQSrs5Awv4fx2uodPVQf53RmuEH6DY7aMamWky",
  "key14": "29fEMs4sJanzYPcAPfQaNpgKAYxXEaMrez9kjB2UUitA56853gDnQuF53TKtLSs4adtyvT1Pv2inH4oF8BSL3xta",
  "key15": "cj7vH9UGrV8TBoeviFZffof2uqcLUTCV8XCN23P2ktzBmARuKwdue4yEyZ4XRcUm2jCdi4rD7rCk5wuF3k22vkn",
  "key16": "4dvsC3JJ8xn4dxYsqnj7XW8GAEAvyuaU3qkFg9ZdrdDEfNHTBbzD7My2ZF3AE9i1UqJSkqVtbvg2kBcsgZbLv61",
  "key17": "4Vy8nt4uoKNVSb5CEHejwhZcQZ2ohaKBunJNTZDFC14gFbySdeanih4RBs7LD7MG22hotdz976ZvnCxdCbpoMiDE",
  "key18": "4ymweDDSRCc31c5Cfv1Z8UgTH26M7tbbD6CTmBBRNdo5EpnLc2ZZVjhy1n9VnZPfr5tvNM9aPcNMj6vBPJAMijqR",
  "key19": "SFQBtCHb891XSmU4GzVLphwfZkFhVmU5D1KLHJfSuF1CbFS7NPChKZ9YFirkTfjT9v3ZeFDoVQwzqLY4Tny9VV2",
  "key20": "bxRscXnGNwz3k8gRg58MmbaEENfDMw7qKSdBt5LpCZF131giu6cSQfLhtWWATN3Jo34fn7ZEbCuVcsD8BCSehep",
  "key21": "5fzpta5mV4pJEXMcQf7ixT49VZF8JuVEUigjasUU2RFhhg2M8oYyJuAEGEPAAMn1zQSLs98XCMvTD1bzAN63SqB2",
  "key22": "4BniFuoo64aWL8ZBviELNPhqSftzEhN5H2Q288CSC1bxawX8JzXC9GERhkSKy5AfZE3epXxKoitPPQ9r9sKo4kBE",
  "key23": "jhBFeRcZPibkCd38qUjJPHX3rDn8B4aGrgZXjPc2zazPmznpsSpTyMkxKp5Rigppgv9eXYXuVzbWUQGoXuNUxLa",
  "key24": "48MBCaM7qnXu4b2HFaHzQ8ooEDw9AjrUJQDLD53sNCtTCMRFh7yMrWjPgDF9voF9ceiEXjwnNbWkpLwGujyf5aY4",
  "key25": "21uBsofAzQRbPAHKCDWCCAB9AC5AFrvtyGqkP9w6HZtVyfZjtfY8prTZrFMjK76txjncdDvZLNoiFmwkbMZJv6Dh",
  "key26": "3c7JVBkBoGxU4CarRP5XBmm2pD9GBrci36AYNESkAVwb8mumxvRkuMg11U4Tx5byvZJ4dW7GwgJJAHtNyh9gFbH9"
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
