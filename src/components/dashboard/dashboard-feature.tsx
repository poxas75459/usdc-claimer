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
    "265kJikcPQEtquhugBbswdyPySKN2cWEzkirbw7ChGDEe8KpeRDmNtcQEigxDmpbPgDHtU2RvCZ7sj74RNUvQUjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ke9nKGS2PwksFaAAoVfyYE3C5D4VYEvLR7pG3KTuX9tZZyBErcuSjWFvAjfBoLArGvGr17Qv8vVHsjh4k6r7eSg",
  "key1": "2BV4fa9zmTMjubR8nh9M4RGtHEr5vWSoQYCpMRT5ZFtGZLH9Vn8d5NUNQsZd6hXeKXrcK8LHs8PHV6DjmLm1nctK",
  "key2": "SZWAx2JuNUAeem4A4ZThmysq8Tz4anAPN8S8gxUKs3UGQ2a8zdDdYiUs685Bx8n58KEpCfww2Ne39cnjPtoRikm",
  "key3": "4T8Ks9BkavWq969KoxKYBZE164U6heGh3vUMyUZd9mwGsXPb1wVoWRNLdQYy2476UybLJP7EJhytwMaRdckYsFdF",
  "key4": "3TQXoAUpFPGYMVXrQMdGVZgDzowqAZTU8gJPuj89omiGW4aXKbpPAb9CnrRZHkLtUW6nNYs7kQvtZZkvdfDUSBTC",
  "key5": "4iD8rD3iNhiyqRWh5Hx4dEQM1BL8rxd5vhHRWVawmsvza1wFn5pu8assPrzFz3yDoVrFMDbaRGVs8wqsAb3DyeEr",
  "key6": "3eKvZvnNoCJr5sTah54VxUt96L1E43GRcEPHyshpoxbWsQbtuYcZeUM4QWgW7wxjSKRdhzJzgwwWA2tWQtUPA5py",
  "key7": "575xpJebag5yQZjUQvRndp2RDpbZJ8XnzGT6cysG8jSW2VKSJaAqZMzxhMHjvgLYMTZ7b6T7AReYXRrKMh4WRTE8",
  "key8": "npbc1AEeS96URUtvWWidExmgrM1bp7r6XsPzV1zS9wzCwzaj33R3Lr79veX4UGTuUhjb2VhS9XQ19BNqoeHob5W",
  "key9": "2S9n3dArxLXLWdgaRcDso4BbaJDKHWRA2ssknBqhDHTixfipB3S7i52panqFbq7jCg2EY4KPu66fU4HxQ41TQKhJ",
  "key10": "5UQLePZoz7jPXYxAqrxSApSJh2xVVz8U2d3LrrNNoRK33dyCmLt9pxiT4weZuVEinSxKDCr1FH2KgbK6XzUBXfob",
  "key11": "2VTUgciaHqCswB16pfdXdFKrX98S78uWUhEoHAcuG8W7bbq6PUimbQTrnPbviALVg9AasEWf2hzRJxADPE6U2GMo",
  "key12": "5c3p6YkacHhRWNkvxFWMj83Y4ShAFLJ636xX6tRbcWc2M3ZyzUT7ThSK1e815gZEbn9BY5C6cMFcspSG8Ykr7DhC",
  "key13": "2C23Kp26huqNq2jc1sFqyGopMeTAJz7EcSfS3hRFHzYQXeMJS9dVKV3qgyhi1vyoUjYgiSszzJr3VKHw8aM1rV7s",
  "key14": "43J5fRGcRwxTNzAdDn4XQd3JkEZQFccMB3T1PE7V6xfoFicrTNbh6GFvXxJv9UDR8Azg7DXgs2R65WeNHaG8DBMQ",
  "key15": "3Q8NjkH24QBZNqA4hBZJKHovwjW9Zf3pz4ks24jZEUzGUVjmSni4X25duvC4qoeeZa523SxHgw6d851uu35K23TP",
  "key16": "3gtsin3AcNqufZYvVzjcC8sXwsA51mexrPXaUcEk6s7uhMdbwqxTvFaNbCTruytfcNF29aw39TGJRrEiD1B2TfFw",
  "key17": "651H6bAp3W1JZGZcA8qsMHQK7j31rgE2VTajBGeRCs2uooypdYKWqM1JE4TX2RGthovj5Sk6hEmhFbAyhYtpKzQp",
  "key18": "Ru7UE7QpoGcXfaB96znDr9LXhHVBqsRdZchCnQDuqxMBmfFHjR6xV693bNWDrygtStmE4E8SGMW74r27TFTn2rU",
  "key19": "RQTt8LHkCPe68AiVEou1a67EnecneP5MUKiyadUbLWRHRyWHUnY93CDV29yd5h88XQaAXmgsQCtaaC3A4XsCYwv",
  "key20": "5twpHTCHeA9FSaoxCQjXFi2513E8h2bSzJgWrHpKTjN8M2BPJbXLeZyTYAk77vP8pGTbKxR9i7BHWhUXSMAQos96",
  "key21": "5uV9DQ6KDsYHtyWV27M6bXhruWvwVhFxna7kLsdkcVKy65ELMLgDnKUgvqwpU1VidWroYKqiotVpSp9vHfD4LtH7",
  "key22": "D6cCbqJeP5xqeqKnrkihGu3htqqAkUZ2LJkkWgaBYutsxd5726umeriGxkkAJ8HJgS8o4AHW9smBJUMh5K9NkBH",
  "key23": "4EyS3zVQnpxZ3FYPjGTWGJGypwcrfKKRV8KozYQRhPFEGMieG1r5MsvENKYFK4xEcfSHx6RWywDKtBAfEqrqeBBF",
  "key24": "2n7uSJJNUN94j12EQmcdVp4f8NFpZTaWnAmFkjAFVAA8PRQYeSVwUv4kaRZVn4g2XYRx493PVi4YYtkTx28Rybtx",
  "key25": "4YdUgGAj2srh5QSyJ2M9gdKFwGutQHsU4m9dkiP5D5du1a4FXrJ5g3Wfju1LmgFmHM8T8ro4KL2Ucm4ETJVFTwrx",
  "key26": "3zp3DLaM5esKEfcyd93c2ScWunHN7n7pJ4RHeNJfikLZtEWWgcq6huKvBbEJ4pzugFdewYau2YXVz9eaW2VHt7Ey",
  "key27": "5pQe9Nj5cPWfKWuRGfF6VyxD4eSgJiRN9CXkt5keXmxgwyBSzZmuHrat93tZFzaqur7baW5Y7xsAL3qmXxXYqZMk"
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
