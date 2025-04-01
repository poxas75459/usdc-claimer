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
    "UU4bebyuGbECb73skidYouBFvNP9ynjKsapmRZsu45dXDPqeAzEv6LNvgGxr8U19RG8Pbpa6cAxDGbQ1DkT91AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9JbHnCYBGiPfx2CCr4ED2GHrGrCzgqhbzUjg9Gt7drZMWY6mbpv6YqzzzgFbpheaDHAL17NDqhLg4ozcBcTQ7G",
  "key1": "5d5bS7dhMutg8gV5iymdPKdwfXAfqUADTR7shNbaoMrJQLfJgY1xc1JU1Q51FEsiGedsSH3Gt4r4wGjuMriVgv1r",
  "key2": "5AeM4S1CmmCAfKQMK1Bu17b2TCYBdi29b2dcxU6CQcACdzqzJoL5sPCrJoqDhAoREvJ9CYzCbn7fPKsfVa9M2Diq",
  "key3": "4vCGJgAA35efgWCEoxzD2dxoj2LxS5SqN4oJWWEDNZpsEtz3zvCxkd7FANbdXk2MRdstTLRRAkLELLJt8fJUhqQD",
  "key4": "5dHwtsEiSkbQp2JxhyK8fipmxEYNE37kkeUJ3J8E5zC5D3T3u7bii2CTMMzf4EGGW6imvoSqf3Vo1NoCg7WShEEd",
  "key5": "2wC3shdyhiy4jJYU3swETELZsk15wrKcfk8J7zNsxgM95ncWkLQjmM4stvH9UPTLJcDopait1JZcfvirUzfxgSMi",
  "key6": "2ygVvKHBpCBkX1d4GohrPg1XfZjLLqL2kMq9wKjVVhBYEMwuZqBwm1sreJCfou5s1XGEnLtGH2Zoki3JdQRCB1xG",
  "key7": "5Ti5hNMjtzLTggbxMg2NomfKph2H5o8ZoSL3xbXRNGfuQwXM1JoDS2bRauQcrHdR5ruKTjbLwFWdDSnvqsQHU9qv",
  "key8": "5GaCn6mHY9LQgstgbbVM8vh3RArVgmFcwnCTmkBYeDzJtWzACfLRSREjELni19QaHdGnf4QmZktPtbe45Urx1b9i",
  "key9": "3XphxVBJj4D2KcHY8mhLMk4KVk9wqhKW7ABAS3rsRLwZPBtUjuBXVAZMncXU4Z84m1YR8TtekdYajkf3RPpNjW3z",
  "key10": "2cZLtjB7vG6XBCtmr6TzZKQknBP5N4AZ9Wwq1h3yChxPgUeRMqQFWgTtTLTuJhchjsLcQ5uM2HpSwKdbjvdjnoCd",
  "key11": "3YPyPip8uxdGczaee9QrPbbak7P5bobM5EFcD6R34UxKeX5u9NQmaNe2iJVfsSQWqV14KCLYT8D99gGsuhAcTkqM",
  "key12": "4rggSdKpEiL1AVAJaDZvHHnrkGmvVufJLznHvN6cTHhpFsTTRNfRBwkk6FqNyz24RuoXERXxCAKBBs5c2aTR9jpy",
  "key13": "3jHmEJS4VfpBGW6F7pTbQNEzo5abhdSfrVdduVrT31onovgQE3XBZMxebnzaH5gKtF7dPBne2mHdWNHEBcPAmkW2",
  "key14": "5sGeiAhERieX9v4snGdUwWKnFp6Xidx2DDqFrjipfzD7tqDNywBuahU3nAjtfM97w9QzvGTB7Ap7Z7szJqC4E5ka",
  "key15": "4tE8GnU7ycvmuDjDetoR1MwP1YkqqQwbLH2hCb1Ln2ayFxTycRChDL29YywtAkdpouTJvVUnReKaYjz5Am2o7hf9",
  "key16": "2m9RcPVcNPZJ45m6gtVc3TWH7JSJAGkFpL6xQXiAGxL6aPdCbY7FxMFZ5CHE8kzj7krVCTsdKtJGXqv12m6heroC",
  "key17": "4CarHgg1H2SqamqQVabpsLWTkPP4db6vGppm93jgLYxcM1hBPbYfCSdFqpUtMz7TEhmRVZz3V7HqrHnQ6X4R4rmt",
  "key18": "61pckeapByyHP4k25w2p4buMJkG2MXC6pZ13HZkFbY2k69MajsmhBQ34nZM7ctcWwQRAkSV66iBCGWqpnGKayYBF",
  "key19": "32S7dTHW6oUmjTAFHKTcBUV7aGUcqjYXzifjU41Q7J2rQLXZhsKtQDYtfvnwSdayE8MknRKkT5p85EvUF4SRsH4U",
  "key20": "2tRAekRLokAoP44ExTq7NnZq8a8oJxrRMEKAnhjqcjFHCPFXcbXkeuF7e5i79nbCHgUkN3Acu5jUPWEnbzM5zruh",
  "key21": "47qvUBv8ApN8EGXr6oi1RMMUJSgGA1s3N73szsbnpefXxM8zWtaZA2qrDtrnscxwqXGWuiP8pEVE4s7MytWa1Sh6",
  "key22": "7wFGHPiWqUZFLmpyRgmdtDioPhh1Rcr2ZjYRpSDDHoEa5A7nNBNP39fXK7nG1jrSxrXitsy8TcqYF5c98kQaBiy",
  "key23": "3jcRTEeqfs5nLTJadfCKgM2kxP1sPyEWqEA9i8AYfJJBhjCs7n4sUpkvAQ7e3xEfh8F6VPZSQsQjmGs756RBT3tH",
  "key24": "3QF2kgBF4dsE8yyp6r3B1CF4dgZxRfevBLHn8ZUN33XCgpsFBwBBrczgzMguTp1dGA5twh5dFjg4WK5Lh2WgkNPJ",
  "key25": "3tsUus8xjNSTzgjwr7m5usWexSfCiNVGDEk1fjXb6U1NvSr2xXWzdGk6RuDtfgfT3kdvf5DM7mQ7nTQbwxnY1w1R",
  "key26": "3q8Uofdk55cftyrHxPhqbYCNLSMAfWARCNFCkvr1EUpD9KswxiH3dHD5jShTYJJPfUmwUck8M1HAc7DGVDX8Rw7B",
  "key27": "2zCT8HHTomhGrYaT2kchRtaDVmz942iimCbwA8gY6St1TsXKrpmHcFQN3epjdGgCoMaT4UeWBZMhTBBXCGRpa2Yq",
  "key28": "4YnuGHVNtKcaA961Zg3XQPNB9tTeYycSCFQo3K6fUWS8652w346Rs96mhWw9AEW9iX7MsNiN3Bdm9SVbXupbkkc6",
  "key29": "5xo6ZBeq8DMhrmpHXny5AroyotEWASiyB9kH5z9MS8orVnzkxjCtSZq2ftd4peP2L7fxCjpHozxtcPv5mt1RqsMq",
  "key30": "444GQgYTG9HNHqeeZKP1dPpacuhETMMW5atWLJePkp6Jd7VsFeorqAe4r2FSwckGL43h8wmLvTnaz6LCuZ1pGf1D",
  "key31": "64Nsf5vyhgbKK52G7fabD3MUeekJZafc1eoPAjQP8HMaGSgcwtwAnL1FdqimSjcEUDezUaZMj57zFQMECfWngFn",
  "key32": "529ZEkpoQeG7NzHcFYw6jJWgwWBgz6SwPE9j6pCM2JztBhDB81FJa1634PFxCptyhQb9xhAKhHaPUE9QJJ2dTmJa",
  "key33": "3dZuaB4pHTAyuX7UuycozhN5DfvKKh9wzpUPsL7M63gupFDsXz3Q4i59vfsuiun2D3ps91A78qHFAQjeTuN9G4sr",
  "key34": "2FGic8QBhyHefGY2WqWE6qYfaC3AxfyBM3PMJCC9N3cpZjSc7m2J5cuAMEPfXesXLcvFJtanPNXic1mGW75Wf8rX",
  "key35": "2scHNANUF4qbGbd3NXokMpYioMo395ArP6QPPJynUeA3itbGmWFPXJuSJwfNQRoCacCqnT1VmUqWU7g6vsgFUCzV"
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
