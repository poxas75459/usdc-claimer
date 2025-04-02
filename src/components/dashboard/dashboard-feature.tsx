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
    "428EGKaTuXdfENrYb1tdM1qmTcqbm1BepKCLmXK497m28GF72WcDCwttj5H7BbUgK7sLB63khrVwHWtgrNBLxGUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hvj1m13Q3snLGTT3VxY7wZW9MqDzdxDTuftFvvTZbbT7md48RueeGYHS5F1pinPANUNABRh9uKzipc1wNfme9FW",
  "key1": "fmAY843ZfQBbaeMQgKqdanWCmdWrLzaq6NYZ2sc6zVFXkc5Q3i8ttURt2bozoJ8sXRxJLSJDwU6ayZJQ3gRqNgF",
  "key2": "5kSHJgwxUJtszprBypkXjXwgS2LMfgM1pWjuibwbwnGeEeNraRi1wzCB9pKU2Dox1WTfGQ3TJMXRk5qB8CSNEQb5",
  "key3": "3wg7NnCS7iFxbvZLT8CF1tAztiM49CkmgrYShANJc7rYnqB19i1buQ3bJAkrQchTo1he4v7Fsnx89dK4MQSTWRBZ",
  "key4": "2GXajt9V1ejREKMuaBTtDyLqJJxGmueFuaddrjCQHXnAxr3bxe5Tpq5YwRa6RKK1S6zrjVyvyCP1gvb5faMoLdQL",
  "key5": "2SXNaCQL3znx8WD88wvkUpiBrXXTFnV9uDBBm51HxYTikN7iq6BPvLb3u5PSGheWEmPGuMGC9wLyfXaWbc5d5bj1",
  "key6": "2hGzkx4Zsa8pUpqjezeLQBWbYMKJw9mJoS5gACeC8eTXxQfjC8YvTepPq5GLbGiecWuqdWUeRkM1QK2TrU36gwbc",
  "key7": "62JvWu5zFbkdjcUbdiFEoKQaKqYmC9gEAnx7Rfz4j2UYQqLtQFqEQuYRB4JjaL3HCWPPNzm8ukTWHE66sUSH2BkB",
  "key8": "3P6NgqA7HTffhXVGQgjMoVVcQ3Funj6uJ5D14KVHkUhveWjUSvg6kpTE1yrdT9UD9SnLZ3cReckz8gRxRk8cFgLb",
  "key9": "2XaNM8MpcUArHfxJzYa8SFuwQ61xX7dRZC3jpAYcWKPrHcxDiekh58iGXZFrvcZRdkffKfSLFSZ1FpYU7ptmbfCF",
  "key10": "2gVzeU2Vvq3nVMLiiMtZtvh9TDHBUbhMmRZEToVwDJZVsRrtjBcrKethgd7BZcm1rAgViQCvjF2biVGRbL5Z6qj5",
  "key11": "sFZ9uQWSSMnb3pHmK1mWTg7jrmoFTw31vq77ZUYZ36w4ZmEuSm97TBfR4TjidHmauweiCvcXQVzn5iyrdmCUxeC",
  "key12": "3r4DNBSmpCk5ZR952e6oDjqJjU3TMvV51BWMhJ14goWnRRKtgCA1Lzz5DT97vpmhAeuz3i8JA6dBbVMShyXBNrfN",
  "key13": "3vcSbjU9bpsFEUySUjBKX9cEPZYMwU6cZ9dLdv8YrXRfvcGPbDFbLVq6BSyoy4oWpw11AdYQM5r8o6GoUwQDP8eu",
  "key14": "4Kx3DXDj7A7B9N4kSq5rjfwFD3Smu214kLwqZ8xKY98G7frRHrwr46QYE1a3NsSuAubLaF9i9SywRXaufYKNrtS",
  "key15": "3DRRoXejMM5N9gFomkyoe25WqKEYsQFQ1cFDzhvnmq161WsyQ9Cidx1ryEuJQveChD3NPcVGafEZA4wmm7JCS8ic",
  "key16": "5LXp9zD9ZWVRgEixv6vkNqLHVZVe184ATCHSkssiHGNKbixmFPoXzGnS8uYTU5GQdsVs2Gaxcn79iuLt19Sa2AcW",
  "key17": "4euz7PUWWzZYX3Mqk1uRAny72tL95ur4VMGQZ2S2hdmgjX3j9pksE8HCS8oeayR7ibiwu8JEVygS5fm8Q4JkEvL8",
  "key18": "3YBncHH1LZiiRotgH9xEkLK64vLnazq11XkbTHiiaKLZ7YyVgHBMfNyw1FUCJ62hjieCqQLcFPpJstQ4tvCz7Uv6",
  "key19": "4vmwn83ua96WhfTH4Xnwz24t3t8hERfvQJytNyGijdrhgKqMk5DFrQmanECeSjNh98NChGhbn5d6YR9VAYbisiDa",
  "key20": "4PGjrvVfejV1JAdU6vknqyxEJrDzgbLKP9H9g8v9T85CitgoMmmGMPYTZzY12humVkuucQCECxp87Q8UeT8okQzN",
  "key21": "LzVtGNvF68LCeMmAXoQifxiyhrL2VfrETWSTsMPSp9PrWThJDLdkp12HuJM7SCTGHXL4cy8TkC8mf22s7PWaMsk",
  "key22": "4zTGdmM97mbCVHW1qHcpTPRPC33hjg7WNHAHEeZNufkgkxdL77JMQH3uFeKAfUDnpF9ZTRyUq9BtkEUBymfDvNpQ",
  "key23": "5o7w3mNiMdumqGkhY7XjHF8GvuXjtM1VSPupKtEQoy2MsXvn1i2pWnSPYA5YooyePFugw3GY18D6d5uo2mXR2mht",
  "key24": "36hbcU43L43HtfY1MNsMegFYEgERjzXR2VhJ2TR1Z35Ue8CiHtvuba8CDa9JrYV34a8H5BUEL1MBoDUcnVZsUycB"
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
