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
    "3hW2TGkbPj56waqVkXmaJotVmUBTSHfnYRFxFUmCZAYzCuJBmQF1hvczEbceabVu2Kdw6ANMfLNvUB6J95srZS9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fLeMYaPF25PTuqnwLjWv9vNjWUyeQPdoHAS1JzYScapTByCWHCcfw3gdr5TV6mLiPeU4LXEVPffHeQjWpohrM8",
  "key1": "4aE4z1J39uyHsCCC3ZY5EkwBhFt5T8Rtm5D8JAMuPd45xRtYNV1aTtUdXxCH4WEzTk8jHV6onTQXRrLHFzqmMiF9",
  "key2": "3ZMp7hr4uWJrhqisFB7fD7zfwuKRtKDTRDtgVDNayW8TTE6vYKGf44W5TXcsHYUTGL2mrLTtWm6XXGAqq6VcmaBm",
  "key3": "A1xTe8Enxd1zct59ZWHeTL6HK8sioiCumANGRLLhKRiDeqsGngyuMhRWeyK9Zea9dupvqHBLFxJbg2gBKUFY6rv",
  "key4": "eQjLpX5L7XquiWgu3b4SiUvs4SbyyVaCEL8FF8szJbEb3gS9bxx9e9JAwWhnKjDRhzh9WTB1i9oZBWAGcidTcGD",
  "key5": "G9uFoK1fVAFSBVt4TqkhTsUKQSHjrWfZ2Zt33La8k1AcJL4C4kUPLEvWocasAHmcULaofTsEqBfbuv8bgs9W8VF",
  "key6": "4ymDEhfAz466JsFxVXTE7yWSAyjFde8gGhoacva7EipsC1cMbE5hm9ndCn66bPcZydqUoFJnq8wh3gmSyn4y9YXb",
  "key7": "4XSG2iKoJdMHFDCgWy2YqC6JxzJ4ar31xTvp6KS5GDJK6UXW1TH5JRC4vh9NkHdnNqurPebevbh15hJUJW2AgrSC",
  "key8": "266neR5pYYsCjLAxnW8HupNCQe3aEybGL1sW1t7Kp74rXrofcsf9qSTiD1nu6GWkBBTGpGenYXrWbe9W1kYkogmf",
  "key9": "HcDi61iLqzDuY5t5Cqtx9VpDq7XeY5sQY4b8mR6dyARWhG6SMFx6yitUrJWWFithHYrN3nMSRQwnw6dSeExo9MU",
  "key10": "3qELwLLFcLehXYopVhcLvEHBz725rivoGxNNVoyYAJ17eaNZTDfM5s3WSuHRfkr3KY8AGao5GvpYzpe7avh83vUj",
  "key11": "2huk9xpCAnPgHWuyq9JrfJjjgV5Nf9NEbgwhAV5mJXGRaWTB2JkH6QhPG6drWeF56FkQRy9h8R7cGa5ZNrJ66szq",
  "key12": "3WioLVjBNCso5mmoPMHbxRemUo5T3PzU8UvBudR2ysBP4jq5W45MCvhhfwEzDpCawxsYhfpdQiUEr2fvRLiBz2of",
  "key13": "3B5repKF6HwqtqyryiJD67METYxtbDXk8XV5Sk3J8XdptA84apE2tHrrQxzEK48rn8eKJV3mr21ky69pGWvyEyWn",
  "key14": "4HS6rZpcyhdvzo3EwuT2yYSc8XayFYfsHxxK4oZsobFuG72KaiiqRhBmVq2pXZxApuPaYJyuAVgjysPhhAqGqDtn",
  "key15": "67AqskxWAYgmCqNUpMnP72FCWA5u3T16Xezg2N22bFmXU2Cg4KJoftoMtQMEqaVYy1dz5dMbLp1V9fZqJawR4APZ",
  "key16": "sgDzkHvrUC7R46T4aLzbKgw3cEsguwYwpPQtuMMeKURSf5CuD4NvWr5YP6v5xn9AvGqjYAY9GMRwCa7X3WTwt1n",
  "key17": "5qmpddbYwfCTSNUkn19HZWscGiwKtMpo7SqHbfhHNNfQgLLeUFpz6Hn2mBq4vt7bqVup7HKtppdAgoUQQv9Du1AF",
  "key18": "36PgXdRikkAZsmBk8SZakfoV8nvhtMFGRSt8SubYQrpKzqxe3xU7An4xWmNTPyrZAu1QznLMFmtRSEJYBn6ovUYy",
  "key19": "3AM9FX5hzE4JvQcXNVKKUL6zjppJo5QzUk5z6b1KVtGtrCEsqWkputqPz7VF58aMas8yQrpW3QMsER2YYx5xwhZs",
  "key20": "5xdya6CYiKP6DTDPda5oV178tDsDoSjdAhysMgQSBHanYeyaqmEV9dMLrVTHhJx21sSEu2JawCTbftbhrTX1hRqZ",
  "key21": "3kwxpm3aDF5BT3rvwZRuji6zVztxrf7rjizt8gpxdqUBNGnqydb2gikacLaKtEBc5jTM6fcXpy4Ffti2wTX51U4S",
  "key22": "Zx43gwJk2zanD57TeJBkHRTpWZ6hs5ighEW4wJ585g5cEykziqFkxgVoKeHDoZVSHBFxyLnfE5ujjqXTqzyLqaC",
  "key23": "2q4DTtyP6AKLJRBHuG9bpoucct5JuTjWEHy9uRzsWYqeEDCkJDFxf27LhdJV3aRWTAmQ11i93r58v8wN7zkLbN2u",
  "key24": "4Ue4hV1L5BprGJh7y4KyViweRDcLRAumy7Pbs8xYfcWhmiDT5iZmpXFREC4rMdZ3D84xe4dfniaXhuSNobn6PWqr",
  "key25": "iM2HrQtzvUZFokvgcfvBH8zzAWtJJR6PRs185mcHD8wNQRzzhoLktG2Bm9M6sd69mDSXYoe4mB4zegS62cuiRSA",
  "key26": "4mdssSfeuENWb6ruQKJA9pZwuvVpQvLk1C28Q5jZ73HGhiTdmn2txLEymyDvrDjRr4GfhfcBhsiRCrUarQTUojFz",
  "key27": "5fDq36bfS4ALkNPZB8GMQV6uxP3wU4oSnsxeBgc5pduKNDex2sNqc82AEU2Tq9GbVG33KKrd5imcutjaJ9N2bDNg",
  "key28": "2fqY9HUnUzCKi4i25rM41D5Pd8sZ9SVTZw6GqjZ8CGZwcN2bSbEqrA8qZYQV7D7UdBcMeSzVLxUn4Fw8y6xtvecy",
  "key29": "4umRNWHvBn3q7hsgobiKgk8zqNrdqTEkFC9gn4pCktNf6TnCGf6E3mo7EkbGwJKZsnU29DtoqPgeRbSjNcY2sbzA",
  "key30": "25vSpX5rSenpRkUeYaW52tCn4iwcBdkBpTUX9ef1rpxQeTi1EALeC8Uf5WppXLwxdYVnhDKdth367GTLBApdP6Cf",
  "key31": "52nFaq5NrCWCfTzVigaw226FU5nZbiKH68hMYca8kL8PgWQXamAss8LHQsb58Dt7MFNes3K3yRW4bUn6hGhf3Xta",
  "key32": "3vtaRvdvYJpwH1EfgfqKgWphUPx4e7eVNqucSzpSPdYHg8NJNZEkjUkaYiAieaZiTHTjNQ1YiL24LY41krYZ4Wur",
  "key33": "5SejybHyPobnjmffV9LFMoE4xe7jViQ8ChRZ82Guxz1VYhzQ39bHCKyRBTAW4K7vdC1wgiWNZ2VEoL1Cb4o4zsDz",
  "key34": "5QbQCc6yJYfMXStnY8wACr65hpJ3XmQnDP1R9xtJADq3PP5M7cjV9hXiLz6rVXadU7iQiPeTBpAWusdgqsz9Guqi",
  "key35": "3oBXtZWbnDr8VdfyshhdS8XsYXYp2qXqnDx6rVcxZunqyLZR2mX7YPkNVx5LBsFvskm61PJ6WZWACrXHbH8eAfV4",
  "key36": "56HUv5tscfQxFSsi5qTnLPuirzFAE4WFjMUjYmW1uXL2RA8S342cvHFLoXj4Y2Kwmttv132ufskWKRfy55y872VF",
  "key37": "RQSV8jZ24K6skqaZbjWKVmLw8cv4t79U2Pub7p89Q9rJxM8R5RUKSryoABG1pTb4xg8sDwgWfAiEHW4Zp27yWZS",
  "key38": "4SU3jLSUJy3ch9bWKwHZGk54GZ8SpXrLWDjYs5WgFHFXAePNB7AWUzbMzGUriAGY25rebFShwKktDxwWaEarGNSx",
  "key39": "5Jwfj4tYzx8SpSgPX2dNKT96trDQHHKvkEmcppHCNf6YjkeaRn8H1jJqESVibqeKGCDV7kdpBRvA63GpKai31GBB",
  "key40": "VKapsV4KKD9QtcUrrbusgabdpo3gBvKTQNfS84NfjBppMSirdWT1T1JKvDiKgNGdCirPArxysSHjkCW9wPLUKgd",
  "key41": "uzvBSjLn2m86UVLLwVBbV2sXGP4Hx6Popsu4XyBhg6HRMKvtDP7qVUbYEbvjyYUVyTNySPVehtCqrHnsqETuLTQ",
  "key42": "637o65pa6WG5ndppWXBDU5JiDHE4H1mtE6Mo1tBDficobkmmXsaYFetVk3HBbm9NU5aLKW5H9Dr9beHJGFaPxrbv",
  "key43": "2XcBgVZS6hjGMSZskQ6irSRiUkij9ukTcsCM493b5nB89yhyfhFXSKdd6nUM6nFYcziXjdzTxxLnv9wLiVMfcAqg",
  "key44": "64SrcH4GA3cBGCrZayK7FXgAUKfcDCGUBeXhMqrYH2zUJzhG78vcaHM66i5Qfg57tYG3Mnu6i3YRigxaCAVzJsxw",
  "key45": "2KJpcvHkqRrKhsaYnacP9h1wSjGubdpTMNCYAhc7v6CNs5jDiMZb4XbFbBogQvTtVDDVc1PYx85GvfVyBNoEK4Tg",
  "key46": "2mEgpT2vDTC8PZUhxJ3mwSuXkuktnHhmbigDuvTQvmnLQ7Jp8A66Wyrx3tXzWoiF2rwpuEJJNuddbMK5ENnnyHuj",
  "key47": "3KTaY9xGUpbp3KwvxhSMCobU4YFzbw8r34AGMw6KBDrFd4Z52V5BoTdLsvyB2FhS58AUdvSFLMfVWuydTvZ4biG9"
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
