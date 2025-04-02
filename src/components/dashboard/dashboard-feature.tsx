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
    "5vZwaDTs6bn3vRRh65irogiGmQwvghqXtWnVwfFAXmocVsc7C76rqRVnRaoFyyhNkCaLz39N7VYUX9hzxyfRVimT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "enrx3KRht5oz757PMvgNGdW95b1RazhQ7MJnvD4Y369ghqfzFAEzhDDAnzJovxLHqhdji1djJ2isL77NQx9RD6e",
  "key1": "2wY2hRqQnM2UHPEJC5BUAqtwHd97eEGe6m7e3Vqv2ZMXmzrr8PFVW9SSJZYnakiZaobFgm1sSDEmvrXiQtCsqFoK",
  "key2": "5tEraonYE9Ey6zH63XiU91a4vukfUd53Hr3jb51ToJjD2airRS7EW26gzMNHJnKvKLzkUfGAautYisdNGXfK7Sjf",
  "key3": "4nUr5VbxmnhGB4nD3SPiTAkDu8GMXS8rHEFg69AqcRr6B9gw4r2HWVNK5w3HyBS74eXnGXR8Q81E5LtoCWznDDFC",
  "key4": "osABsRJXjL5boaaUihoSRJ4dZX4W6kXhvWmT4yVA9krGwKL1s2ACZtFTLJcRwQ9niMr7EexHJKYf2PG9yiuWWfJ",
  "key5": "2HJ73znd9Z7BWhbkbMPomKSZc1LqdR7FWsKoHSUx6oD8M1er6udYH3Xtdds2rnt7cpEze2H5SiHwh9gxx6a341E3",
  "key6": "5HmFpU8DafAhaMRve2LCaKb3hy4qVGExCjh53wRnSXSmYs3Aha9VcHA6CD6inFA1kWDizu618AMyEj4mfj9YaUbo",
  "key7": "2mJu3HK6p6yqMTuKCGVU4LpW7Vtfr3DQuE2BSE5zZTFsNYN6182JShDdSbPqPXgm8d6d6TsKGt2x38v3NsXWDvog",
  "key8": "5PW9Vr8QR7uUiPpaEU7Y7k1NV4LuvfoJ9M63nnpiypXarNafCS1YHwtDkcNac3Ap4gLvYrJ6oVK2Hscm47LoxjZa",
  "key9": "5G1gsU9CvAWuM21zKftUyArLd9XzWFV9SsUsaaU2BYWRhZSyzL3ZA1jGPtzFX1dBHrr7Bh1rcG2S9wZacxvVTM7C",
  "key10": "5TrhiG3ssme3BTM1Pma3yeckUaz77J2HnA6PYs8RjswfeodWyn9onPRXkjeywoih9STs9jCPTMuEFPErWuw6zyvp",
  "key11": "aB59bYCd8dNfsm7D6qcMABqFajbTYquN5a7oapsW9citHkMMAD49bNFpk4PeUBRd4GfUQwRoXawNcN4CgUmF3SK",
  "key12": "4ay4zvXnDtREteoG1mgu4TCK28XYgBjRxWbNA6qfJdjAauBQ8EbbaL7xYFe4cGwVYM725yWvsH5vdoXNiuEAkHfA",
  "key13": "5s8f9ePii3Hnup9d8AfHy3XQs8ApV4Hgo8pwTQUYsLEeegV2AgQ9a5Fvq3frigZVGaW8p9Avh6VcztiiqMU1A1QQ",
  "key14": "4UBTvfjYnAhH7Rbd8dm8Jk62Jg7TNNrLhbCqY4bD6sjtNFAB42QTPeZVgw5cVB87iBe9dM6p2azbE5ybxukrJmdY",
  "key15": "5Xf8rrxXkqaCef493uNN4am7h8UWsUAWPHiNe223X2z8TzE61EP5BdoZy2ARVUctvyCD9Mu1vqAXKDQhGowZfy45",
  "key16": "4LNhD4gqWYFFxsYbJ4FdEEEQDh33s9Na3mTTbZs1JMVi39f453GmuDkWoHejYRjxELRdo1oLHT7UiahkuFES1NxA",
  "key17": "2yqnUz1sfevsTj6W3P8rnfGvvhZRvpR68nVNgzZ9CJrzPgrmJkrEVyMEtpJp4t5njBq8Cew5k7bvVJFrX8sBRbB9",
  "key18": "xpsriRRi5s5pvCzZnToNmewQX7sK2rMf1hnHAUWiigYedM72ZhKTG2Fitiv7n9pjm6Ve6H8qA8yXougnNt73Tbt",
  "key19": "GP7tw241X4GnfJg57NqxbBqkLoEqgYByzoUJsDNfR5Q47fBvLL9xg4N2gEqJF8o23w6PmepqZU14fpjB15GEmxq",
  "key20": "PEVELj9pQbBraeUFxdVGA33oHDdP8RaefFved5vfjGihR1Eb2xPJch7V21owEoFPpwA7U8b1d79DPo7F1po3SGT",
  "key21": "2qh5phz8brWGHUFR3eGVAY8gMHv7ziVMXf3P9PYHQi9tWwLxdhCwBZt5XPThr5LRCWhozLJdKiFqc6TTPYyWX2gN",
  "key22": "N9RAn2x9pjKwNYWvzc2v3LVYBFPYxK7RN8g4sj4cCKoHYYybzEofLS7oYPhqoqbvqe8SN4q3nWMHp8zfG7gCs5U",
  "key23": "2RRhCRQyiXd8g13twimkkTRDMZUW6pmkhq3waPRoiFjYDoQqmYFa9Xz3aGaSwiV6ibhDYmVBuXsMWUSGVkNQcv1X",
  "key24": "4dnhJ9fhmGaU4dAhVZQbz3mhMkZhmsAdv8RNeGV65rf1vBB71vmRgBdKRBPCJahLHviMZApREr4hMQx7f33B8PcG",
  "key25": "43Jo9sVecM24JYZLtKpizeS1opw3XLNJPeUwP2BaxAhZ38J41Wi5aBtptBsSY8LAtfySKyUxtDccMeFBCEr83Ueg"
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
