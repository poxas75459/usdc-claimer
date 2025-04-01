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
    "5ih1r2CgxA6YzhXVdzbnWh5w2o1eVRooCWabeZcxhRJNCWHJY829HgvEm1nRVq3XrWHcDcXmPhKmzdcVJCctnbks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RnwqBNd16ABSf7WHNDR2SDwQLTGkGvY7Vr4TNzq6cbC2RTF9QW8HH9rU4PjGTuxNs1eGesmuHAu6oJiuPaumGTP",
  "key1": "3SakkvwH9tp6rkZnYRrTjN9YoJQ8qVBjDaiwpfWxxEALhJDRkA7Eo5oR6wm4yRzMac2g1PFPLAaYeoib2JCmuVye",
  "key2": "3bpb96aQTWhzRRvLym9HXzcCKYRdAGVzDRmSUWvwayFppgFQ4BfcHuUDba8quACvLfZZC4coF8ztvL6U9jP8HanL",
  "key3": "61WATCu2B3Js5uw2ym7pivAUJGGNS5g1VDqDo66LMqSnR539oWSKpsZWQzFqquDpqXXasuvBwdfKC6W8oi9de8Gm",
  "key4": "523F16roJBTyD7NYnAqDdLw4EhHjeqDEt4tqkTsfxqFs85aQXcxAQpRzFzvYSFX2ZpwMsfJq8NMXGhHCR6hoqs7p",
  "key5": "CPmacs6vYqFABtGbFNY9JwQVSS1bNDdDMes2mS7HUyds4YohY1ohV53wPaxt5RAA2shUQyEnqWQkq32yaCLxdFx",
  "key6": "5sELw2y2mQDkLrckv8vXdwdYRmcrF8qEXFMEK3X2kiZftvJ5pWgLaRs2gYSfULj8p7tVa8uXD5eKopXA5vVpnroK",
  "key7": "3QetKXjE6gu2iQJdRHwdVKm6iaxbUEjQDC6qe9mdMJC9UNohw4hHNHnxABTkjyEQ93C9Eb9JoEJgMaPEttRhUGWb",
  "key8": "3gAUWrPa9qCoXkkDWomFvYQv1sStpJtzaQY31UfuY9vckFZ6tsAKkDUMeUZVYNcpLCrn2iYfgsaRtuZGPHBp7PhB",
  "key9": "WzpXJsf9P9PhTZykMJ8AzEQhbL6AJtQufdK3iYkohTaTQK6TaU5m8mPkYcoHRCiSfgVxQhVLXNYNbEQEZQr9UYg",
  "key10": "2JoW1doZB16KZDM97ZKxMMF1AA7Kc8i2bdPx4Hi1U18g9sJnDp3X2kiMgsfZv3NEuJc12fYvc9zi44Ji5WfRDWng",
  "key11": "4UGdCwrKEaKojYf9NfNNZ1PT1cdVwAnHptYfEjZfthHLs9wNgBHrtpCGiNCPS9i3xeyTH3H9WEJtNYtHEkxxdWC3",
  "key12": "5iMFqScLvfbG4SiMT1EHoM36gFovcvfgJTENUQZMD1s3LKaKuyJgtYPA9RSGew8W1ZPjUpEDm7u7FNX5pYNK5TEc",
  "key13": "r8UDVqWprnb8AtwEaeWE2BZDhCG864qUapL7Rf9C2qDU1HipXWKDaEZXq9VL3NQiYb5ue4fVVRaF51tSpFZauPa",
  "key14": "PztMtpYtcNnPgJgMdK2cBZ1sURgCMtWtFS4pt4TkVVNg4rWy16pXCkBqe5wkMjvk2dRg8t3NqGKJh4QsivmpiKL",
  "key15": "4zVQo9ScADZ9pQPZH34SwbGkR4knUZRvpYYrWeqQ94MwG9ngzStB8eLPdRtaTX8fLMBw6gnvKSPZFcSXdDWtSLir",
  "key16": "2ujrRSfHEKDxStXpiXcGy47oP8oiCzu8MGhwXGaQqBcyWTFFudYm3HK2L8gXFCHpcMhCe7kzUz3gFdQPQQpqGMHg",
  "key17": "2mZ2VxKVMiKN7TdUHf15SHXEyeY4Sp753DkGoJkqGMKS45b3MWfgtgKAUvqomnF2RSszsu15kw6ALz4TQchFyQWV",
  "key18": "xsWezdMcoBosDBtdCPMyBywz4YW1Etbp6t2U53j3Ki9D2tguiH6e5k82notb4fV7bCbvvjndPPHdxuQfft931Q3",
  "key19": "295tz2jGVGSJoZKnfu9KNNAGBaBfu8cEWdJ4XJNQaqoPhsMfVnrMHaw1PLeiJwnLGD2Tsukad1C2S5gBx4ogffk2",
  "key20": "zmk5eqiL9TCifc4Ny1anG9MNW37EQM8p6jjPTqnvJUUJNMZ4PbWx3wpcvXF42TFWX4pUu8BgFomtUL8ZmdLYuqQ",
  "key21": "5vqgMfy7VRu2RaVS5B475N6vWMwrNiCVzSjbU4LuqzpU4FHTNhRvvn8JehLWPX9RufQbULSiLkk1S2yJ1SYzoqdW",
  "key22": "51gqqXvu5kcbFTYxMYihxttJQg6pai8TuceVNvosoXPH32xLifbD95duZw6WjfMvQuenpzh9MN136wuf8eottjNt",
  "key23": "3stM9Av5uYRrk7qmDst2A865XZ9UNPuay8xpFwdABJKCcZ5YiuP3uuyYDWjx22AC26MS3Rp1ro4W9rr48DdfN3yc",
  "key24": "3Bgfd6f6jwkRWznqxH6hZTNvx6XgUQ9HEzUdQZR9ChhoDfUnuAPdvx1fDzdLGEyTCEHQFnD8X5wSwEWfvFyJ2GLM",
  "key25": "4HPQqYGfMK9kq1BGkYmgvkAHkJAHCZPUY48jRMYnjinCJvKquYoLhHeReT8HD65KsZEjNCsAWCvk4ufRqqHLvKJf",
  "key26": "3xxVMdMicmvcB68ZM9wSvBeJXcUrNn5eKN32iPsET5iSpwsp7okdR7jRoDTffRkG66KgpYuprRDm2uJrXSCj12kc",
  "key27": "5GknBx8HvoqXS3A2fnkPc3cnCzrHGHXU5x5FVwE3PWsT8RczovsU8GKFQh4TMnhV5v3ux6sypCtY16x3apaGPQvE",
  "key28": "4dpvxYyqzKEUPcbDpFDYxM1iBH18ukLCFp55PXuqhe6VvZ4pHRvT8SpDWS5uBmo2G9incK3W9f12qHGzN2Pu5aTt",
  "key29": "5G3FSNThWbEkkCa7boYzrpwEp3c1MqowpuZ8jPKXyx34fD4teZHnpzKEetDfY4y3D7KraMibH335Fox86wqaU9mP",
  "key30": "2ZS2WEWybpt1RAznD4mbn1wwugvFoGZxZ1fApC16k2pQTUm8KBVnCAnQ6Lrp2d32jxGy85VAsVMw4w5aCafYfou6",
  "key31": "5RDYipHaBLKdorUiV2MSK4pvr7SMU2KncaQSpCesQTc8qxZCio2Rah2dNVTEGAUoMFXeGPJuzfWZEPvpd9RnD8zT",
  "key32": "51yRfxL1TSxoud4wjXVLZJDTZhA9NHEUqXv47n19VUqWAc53tU9qUnUT71L1oceUUzuLvWsVXaWxAuNS1EtqZKpP",
  "key33": "5UqF8ad1YjCzbFDPwk73JU1g5CRCBsN32mF1DoLFD9xi5juUc7igztfSRViovbqUxpQ59iHQn2ix2JTbpUo1Wu34",
  "key34": "121JZCTuWAcYs9CYz3yPHk9deyd6R8Q49T4yRBhEuw4dV2BnjK21WEWQkPKAHco4PNZPMkx9o8jFUrMxHeKWaWDT",
  "key35": "4q7dBCdSmRQpFd3pRwpoPqsqX5eG9N7ZWxppFzL8F84eTXzgZjNo5bjCDdhPq1b3d73FX3JU7KkCsfPMyovPSnLY",
  "key36": "2NkDZaNUzEiWutLghHZc1yXMqKBf74DbNfQevFU4gfupSYWic1EpZHA2nfw4eQxFA1UsNpMjYFdnySv7u2yZGXRv",
  "key37": "5bLqXy1pnSBepYzdTb2pwuamz3vYKEuq9SGhRJMqsCJKf59vLxwFkoTqHD8TdPkPhAkxHYzMif8wZf8P5G7gTpin",
  "key38": "4a6xMpw5u594uK3gMdsjJjfQ112NX3Q325HXcMcr6aUo873s8pTXxBKG3fc7mGzuzA7DYGncqnMN2CuBGkQmQZ4W",
  "key39": "3kGoFFPFXGBPyLCc9QtKjJKGerHzMLFW2bSLxvPUpgS6VrqN2V8gvAqmksogH5GBXQWqT7dPkjXKVMooiEfkGHq",
  "key40": "3eS6ied7YKNs2sRsy7aPf4XoFrjuiCLJey8TCJ2uMVYHvb3jg7BUxkLzQLDgWH5qMD2uQpYx5kwKsvTCR6kq8Qqn",
  "key41": "48JVxhptMwv4fxrNsjVAPJL5avoG7hPVJ71ymFHGeMBymEpsV5nuh93QVq223MtCE8iJNcaoL71NNszJqGBeE74b",
  "key42": "4wsMdYFgcZnwKUE2oXki2k3pvDfK4NDBqKKoEj74GY17fznTtkECw7NYjPTRdPA5wvfJ5xoS1DPhyjXswfoEUMAM",
  "key43": "64WwRqipNPG2aX4SzJYqmDyzRUw1SaHPyVnXPyPEbFh5Krym7hnaPR9Um4L26ApK8duRb6MyGwstqobMuNfK8LTz"
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
