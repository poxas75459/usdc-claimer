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
    "46arFtGep5C5r4XZZoTqNHYiqofyyynjEV7xxkSD4ZjPyLoQnGDaaYfzQW1Us2syVR6wmVzD4qyyGPmzqUUvQqkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XRD4tiRefktys2rSaj5jAakiRvyseXcEoUU6eW4UDywvLknvaq1UJxVBVav9jPTkJZ8341W31JqEQxanP2EQcQ",
  "key1": "3a715g7GFyk5LgYgi3FcN4sHYkjb4tmBq3XwNHgzL9r3pGfYwckMKqcJ6SBCbcqSgoKGzhahAtHjiheGDDGVqTzx",
  "key2": "3EJ2Bf3bqXyGDvRgtY4o7dUqyo6uSu5vpQjKyugfBcvUnAdgjMecCfBnygUNz7urLpWvL95LkzzeMJ3u5fYVmnCQ",
  "key3": "2i9KXBPMzCivYFviWS487mcS87XBDRUN2dop6kgewRK7nDj8mJbzf5bmyZ6sBmjrFyLn1qjDfiZicyggz3fRwMkb",
  "key4": "2CL2BBPLxRgoz7hiBubMvQ1A21EHnMGQEWQMfvxyd2JYLXHtQFbPZZVPhRBdYrh4EpyraYXd8L3pxgJoD9X8Vkbu",
  "key5": "4HCUAPT52RWETXRevVfgfCJmzw4bmhDDhsmzh3PZFqyh5ZaBszwwqzH5HyCLLqLjvZyzUcDEoawGgKzVCSkhBU2c",
  "key6": "5mKti34xe18z67kz14ivJZGFBubDk1v9ewA6sszrZsEDs6qGzo2yZtbvKxSpMqAK17NAXTZG7gnut8B2nijaguWT",
  "key7": "2FMRWWEBW9nFHum5X2KhvNUR5ngxBGThya4fzNffPRhYL9sn2X54fV8AWjamp5FLD1whWsGLrMozaVMLRyuYkmHY",
  "key8": "2Rff5NykhyYgvkr3gg4xe9tCgLx9LZnUf9JxJKjq51BgREtGHn2Y2mZLy72SskTimNPFV1wcyokWKNRgcaLBD36Y",
  "key9": "3abFmHswBfAbBsUaiHwc2azCCW7LRd6niGgHh74jvNap7XaNFDywcVvMUcfM79iRMJ5zAYk5TaWL6WwV2owS3Wts",
  "key10": "4C3d6jSwfmv8tuVZAovuASZ3TmQS74WTPFsdGpxPTgADhRCJifR6Z3YDoPXUWv4rsgC1EhiCrMBGsdS1DH788SN3",
  "key11": "2WjN45j2SbdqJy5Tif5NSpVwTKT2xrYo1n7S17wiuijisJQPtZHkFZpaZtABCkoD3Y3f6uY199GNbuQPasJe7YZd",
  "key12": "3xWirH81YvmDrZLKPKvcLNcHHVCPtZeeZzKBj4bUEKxTWU59WChvgEeF37ipHG2ijxtrcigYmFv7eucs2QwaD2Bc",
  "key13": "3yMcJpgYnES5g3ftzz3fUJFJm1KCFCyNgvkRyDkJ77WxgZ3jadm5eTLHvXtGeuEEDtD3gAsyUxS7VfCPZkXYaDeT",
  "key14": "22ZerqE6im6zFKtYc6TUWP7FMX3p8KXiCRHbyRzL688z36813xBvK5JgfRBrbaXVYHxeLMzXMieqeAzr4A724x4k",
  "key15": "54WUoWDmarpnrxYJLGuWVcmeDSS3agRrmX8888JTB8uShxjyPr8rj6ofMWoLyMmXejRYCKDsFApHzPfE7c8DHr1X",
  "key16": "3brx5vFKKWYfEdzE4u88tPVPq7civDi5Ns7aqGeH5o3uV5NZAxiXV2H3mv2wZ7f6xYTfNNfLg4H6kNHrZXTm2zjA",
  "key17": "5WYNjovGpW54Ahs9Pd3gH1rnpRaYTdYMPhD4uvj1xC5AK4hSL9YRidg1ZxZtWZKMTisbB2CLhsJSyeiNsTsn2tzE",
  "key18": "4bnA39uDAcry4tuui4dkJkFymW5fB3snonxv4sZ1d51YTJ2rj4P8HcmrTjutJiYcJ38b9q4cLg5Djze9yRZj9kTA",
  "key19": "4cTS2BbCckNs5RZyHcXVFiUPD9e4MrrE6PVUC4DcHDBPXQQtEpK7nfkwyFtocS9n76V4zA5w7J6z7F11iSR5Jrak",
  "key20": "271ScT7UkJaS1Z1Yfjk7w6yb29N3koDXSfAo6VZj4Dn1eZDgdPPK4fADm7SwzeLpUFxsfqahnHxqoRDEvPaz4omo",
  "key21": "5YiRbM4Zy6QVK6tkDL9jn5sqScejsAo77uJ17QZ7bUFyAzHiQn6zjeJH3FFUE8MnM8gvHFFhaCmA3YQ1SuCfDozH",
  "key22": "2MedTFi3WurwvPEWKZwRVKD2dDMx7pWLhkBvxuTFkvkNPnHepTFmrE3VHbX7PgwKc2BxryVg3DwVhuxpfrtPr2LW",
  "key23": "2kEX2yJ9s3MZ1MBzXs4JJEFFXEMp9tEAHx47LTpuwjsZaYXRQG7AHj7FBX4zRUHxxSDZT2KRQ1Bb2g3VWiwka9xC",
  "key24": "35rZd3BFRfbETiJoU5GzLFveUnsgm3CPyDuYfGmuaqG5Er2gyiyLFewxJuDsGb2LseatccoGs8RF11vEtMyLpDCN",
  "key25": "4f4sASK74odrUFsynX7Uv98gZk5rX8KdjWoNzfmHokUXhdjPXojMVn5otUD1JxcnAmYAU3a2pKrwzJ7iv3tqxiJ5",
  "key26": "3gZHgs69t4ApcgUXkvuVxaCNxPW17kyexM1APrCdbVFyDhsyNp9JhxvSenJaKfuFbvVEXuEwpMo21mGjpfamjxMq"
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
