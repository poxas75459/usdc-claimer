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
    "37pvCXRACrUMuzUUqHBiEJatJr9MvK7rSVKM6g4iHdwatpxA5pV19y6P1CTwNGV1hqFGx4vPiZrFPm2ZtJ4NNA2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42sFX4dVzGUwrihCX5CXpAtX2T5mfBCjam4t55AQ35LY8aT9c9xaBoQn4qiN5dV8vQnnUu4QmBd5fa63prfEcEvX",
  "key1": "xUZwmKpFUt4oGQCLCuJk7L5abPq1z1C88WBvQC8X3WShbvkTq52Nexw72EAV6zjPH5ZgHKKin66fpENSAomakWR",
  "key2": "5sSndxfd98ZQ58B1THuhdY5ky7GceBbHVT9LL94QH1WgYMB8fh9c76igiPDfh2NhN9Hu4z99wa2zeykRT4nKTFYw",
  "key3": "2oYcUjLsoq6iurDd4wC9MH34d8bv52JiNDUJ42jUXJQrB1GFosWNcShv6j9MQGqjkb8ssHvmKo8hez7PATX4Rp9X",
  "key4": "inWLmU4KH4YptmupsC6cxVm4NdEXGh3aoUrUnH1kf9tufcjzbb4xE26P1xGfkapWYfYhkuHcr7C34aCjnd4cfcD",
  "key5": "62nyxhD31oTZojzfCqULHkwp71F6twDc5eSzrBzSSbPbQKBvS2TdqcJTUfAs8QyuTuV25MAnoXsfJrEwY1XF8SAs",
  "key6": "5SfRuq9HdAUx5oKzYA8PigUjMHDgiLkPeZXeD2BwN9x2d6DGU4YE5ZjqKnFX9dD1EhD4gTLWeLnRxozRKSe9jM31",
  "key7": "4n2rksGsBeSZ3YH7ddxKDPKkzJrPvrFxH4bdeQMeD7bzggBpztp2PZt6s2QH5P1c1omUdvHikJ9g1mUW35n3gfwX",
  "key8": "pxRFzBaakMmrSCPK3JqnDYCnVtxkP1Kc7QhkDknEAhNC8SMTGT8hoLho3BWKmJH8S69Vth9HTF3UmfMbTZbZYqZ",
  "key9": "4hSpZBav7XaUrF9zPcUse5sDxYdVQKSFfzH9wdQXTt1srsRaaKYD7LdnecS9UN2n1144LXb6X3aG9a6iN5BfLttB",
  "key10": "5NC2DLtPBQ9EjUyEC94hH9dnL2J8LpbTQfazMNuWzLjbrBv4E7VZWBqCPM3Sy5VhhxRu2RwQ5mpscczzrM7ubr5a",
  "key11": "242Qdvup4ytCz4csDqNiYKpqatwoNtaqkbjuc6WmgWzHtB4nfvvgGLQhePqKhMgexxbSWwi22TUNsTCnvjgGquNZ",
  "key12": "31UW8UuBuVCFVzzAjjYttxFJghh6PjnY1vQpzeLdLYjayNv1xNQrBxaEyjvv4NBdSP4fyf95wqt9Xpwn8h9Mo6XK",
  "key13": "2Eyuvm2tEd3PRQJ1TffEtWD5qyfsUsXcwRATdRC1C2DSfndpw6e3KBR76nH2kUx1NGFrhg5uXXJy68EKtTj1UbTB",
  "key14": "2XsKttbC7d9ZNoL3ta1PYBWnhEqT31tbtWArT28f5mQvVcdJJBJhcUQhqkzKFKthzmihiuvfoVv94RLvtXqg2qu9",
  "key15": "5Sr3vFLFK6zaajMXNbR5V37u8M3cqGrsMZYcWKd99GBrEtaRzJLpuB189XpTHcSpmNuS8FceEgiVkDW94c7bRhyT",
  "key16": "3LFN8Y9g7CzVNpm5zyhbuooydJverGNGCH9GtD8Vdu9T88FpvU7SZSxmqhFGvArnVV88oq1zEXUZjucpCxNDiHds",
  "key17": "5xynSAqZQ8Y7N1V47yaZJjCp5yzZbdXkMoUTwuW1pwi6zv5Jrfnn4HTXk2u6uCaC9RthqNTwF91Tcys3ofG8V7jP",
  "key18": "2DY8MyCjwkz4WaZENqGFJq2PJmtzVnuV5HCTgXLmFE7HYmoBpr93jvsA3cEyhAf3qpeeUrBNMGQqounoSvB1DHxu",
  "key19": "3U5kjZQLsumbQiaHXLHKPPkf4vayCvi6JStvDBNx57TxNqtnPJzpFW2hDbPzBSt3nvr7VZQrpc9GtmjdQzMQmXFJ",
  "key20": "2meCZevXn3dxVg2uRgdxqTRzNB4jMn6XyDPc9Lry4TCV522CNj3hQHXRbjUqMgJyhYqpH2sjcLS8asWm3V7ZJqD3",
  "key21": "5atjCMdsPscSrx8fAFSggrMuqDotn1GuZheFiFDwqNeuAUyLCTdj9fEgwjTLxe9TrpBLK9jb55g7keh51NwrfeeR",
  "key22": "2cbLWRUAhGk5536NBJ2D63FraBvV5bu221LhSpeziYLMRhz1HNG3YSAcQ8yHHLpJSVKFKFeeVoEEzw2ykAv7PM6t",
  "key23": "5eqpmHDEHj2krrfHfuqVC3RzzUh8V1yXWgLRnwodfoj8FhZgFsw7hoqS6CPKTRxCyE7NJSVMZ7XCbAAnYJ35ohsG",
  "key24": "5f9McPEP2f25ejDfummDrMb4ob3UXURFVui3ANTBLSiNYVbegyn6aNBbdGUfJT3fDtFidRFEpqVYDvn9RXQ6sHLL",
  "key25": "27T75H3x2R7dpT3nUXFj7qTBiNv29Bkay2RenBNrj1ymvfeYfJFXFoFhk4p6PU8RtDWdsM3THZ7tnGieZA377QQA",
  "key26": "53gMnR5kxT2eAu2ujhcZGfkoE5gSjrVWJi69BzABq5v1KvAVBWFA8Lbz9J4Win6GXMDchRPHxxpU7qFKEwyu9AgL",
  "key27": "TVf1WuZgLTiq2DYEJvkmSrNzgDsAGuFrvtHtndvzznvh8VdEw4rFKCRkq1ebzunezmMheuaWYthN4LFrzdL5kLg",
  "key28": "4k5fwS2w8ZN6h6idhfUShaNC1N4ipoPFLZh3pyV8xMZkbR2Lo6f8vuRK3FL4hhvm2zM7GGz7zXa8hEmsPydBbfJm",
  "key29": "26D1TRBZsAV67mVAZSn1WDwXF778JXPaRETtr9jug9UU9udCjiwqSjTeKhMivaoLEA1KDPs9Bh7fKiaUN9vYwy8b",
  "key30": "4V9kG8izwqtQbpyzE8hFpcenQQGxU4daYWPxdpbVTUZZY2juByJhkgzG1urLqJ1aNLaxp7M5d2tGP823WnGERvgM",
  "key31": "2rc431RqLjUf7fJG3LWydicG2WWKxfA3K8UZdSYY7oKGvmxwNbVXpRvQb652JX3PEFdVH81QwEqR9WnSjANhBms7"
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
