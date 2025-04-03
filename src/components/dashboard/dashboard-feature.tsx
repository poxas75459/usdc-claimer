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
    "4rsohnrPDpbSW7U75NjYe8PLUGMih1xVwbiHD2tqY7ySuz31xu8kSa1hH63h97xjgi6uUtgADSzvpeKY7XQGai7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEFeQ6aEMZyLMdp3gNssEf1otWkxXLaptAhqaa8hNNa5fG1WPZKxTq2fVyEf2oNpzz5TX9vTmevRDUDXWuZgVsH",
  "key1": "V9FNV4B47B9j2ux6fJ5aw7eJXJfaGSwnJGinP95Zy68C22py1b8HUY4CVMjeQTCfNT1GWEp9btihfY8nw4m2WtB",
  "key2": "5SHwdXp6XMRaJoudD6ky6Vcrj9g2KPCSWz8s8bnwtr9GUeBwfVnHDhsdcPaZBVVqJhi8eUqPJ4uB8bdKwixNAwj7",
  "key3": "x2WKzYn9oTePVxw1hciJU6KmDGdUxc2nJNAPTDqHctwATJY6phq8aqNyuBGKUMYyuc11tCFwgv8UqKBufiQ3bFk",
  "key4": "4S65AsXYFt3MAtSi4swNb2XVhddsXWG1Xw9yFF98VoQKnZNsCLCb6Yygh5ovfBs52jJ8mEQDzmUMvfCGy36zJjns",
  "key5": "2L7J1mf6Y94Nuv7pqKoVgi8cYdkJ4zudT96btMnwYrCyBMPAGBsywLRpJVyw4VbMM759KJVqhpQHzV6r92m8gizV",
  "key6": "5wfUQbwry1pB73mrC1ihemQXxdQKbeaykS1qo3Yb8ULhacbaWHsC3VTzr4NTiHurf9eU8F5JmsXv8UbjhkguEySh",
  "key7": "2QeAvgutbek9s8XJgP5WCH1zi6DPYLYrRZhUtdCUkjiPjSDeir5mK1pFTfA4dx8V73bmnHy27SgvujW9LTBh3P8b",
  "key8": "39zeyT69Md2wcWsqxruJ7y5fWW7g49Pw7FUzijk2AKQCTavJP6Ci6KP95Eks6wvBUsuemCLVqHb45WxtN8TXS2eN",
  "key9": "46srV3WBq5XwEuf6CJwR7cxQRaXVRkAz7V7fixhyjiLCv8SASDqjACCVgAoB7TCJSFVEPKRzGjhAXbMAeBaQVxnJ",
  "key10": "3U4eyHDCBTNcBziBLSpEUz4fvERJh9qyxmkN199Xa3P8VgqoxxPadD7NjMAD5aRXTcZB8G2mRvodM63uaREEJbNH",
  "key11": "4QFDzCY2sRWs2g62Gywe2Ci4bSv6igRQovptpU1p8RPVwriMxDtu4jfxsjcWYhcNXGZvHGVGpud7mWDQDXpmE9FS",
  "key12": "3hTkcVGTeTzAwgWUDCHg9qdCEPgK6iFQE4SDhnrRoDGKe7vj3XMymh8huiEjJsQJ75483UP3njSvBTKBM2d3iDSj",
  "key13": "3tBBJqkeFMjoMP8ygLAMUZVisU1MFX5wxneC9j5mT3K5b1XD9EXGHctwAUePxHwgQUdonndyEEwt71gfrf1fR2ue",
  "key14": "Wftz7EdrRXgaiLxEMCLW7y9WYKQyQ186cQerrbW2V4ock9zMZqJRxcHzrVzoMKdMdm2jSk4BVk4gd99cMs8zWvX",
  "key15": "56eXNxbYufxvfUbb8hPCmvXs9GcezmYvGZYm3pmKr6HAK48LkAc2DrL6cw5cFR6MXT8uviQWgKtuAPqWDf7x4Gmk",
  "key16": "2fZKUApL6NhzJ3egDAJTv6TugFVHdUSnief5qrgnUcXDZfqaJx8JGRAAbZDUEKMAr3B35bZWCTTQoYiyXiwSN71w",
  "key17": "bFULR1e5k9Cn4QfkXZYMSTZDhckb66PStp6NTkqEPFmT81PYUd4r3cc5AFmHY8bhitPkxKc1x1tWrU7CVGGtiQs",
  "key18": "5LESJsEDtF3gMtTnjkNJn1WhusCMNEdaSgGw7MwvC54fgzGnwmRgZEv5Az97xtPvCJ4V1LhhPqz5gyZkAF5a2J8n",
  "key19": "56UmdXizC7AhQ5ttzk8B9kvVqZ5GAuhQmaczp949wMB9SVS1e5W1pYUEimCghTgwd7DYcc85M1wbRoo5dttbbvNZ",
  "key20": "3PP3nfa1ztPx2bqeC9Dyremw5cLhQHaiSAZ5WYSNky7xQ8RNxPs2tis2AeUYQdP5kBAEhv4FjHECZZyZ4DBZKenf",
  "key21": "5SJJ6o5jPk61HggtjB3ELcEiT34Kk4vKiPA6AjXzweXHiPieMNmagQBXm37BEwryuaSPWLiDaRnbr14TPoCFp2Vb",
  "key22": "2ZHJUnnxHeCSGQpB7A9tuBpQELFDig1FNxJ72yQfPZKnXDmuAWx7z4hEc3d1U7yAnwUmA455zDKqSGFv6jD3GvPy",
  "key23": "3fhzfdUcEqWHQ2S6YRW5xcB24sQ8UnFfp2NCcEoYu4t17Vg7XRTZomhLhSV6NiZKqScL5zjTQUJepuLErzpg4RGZ",
  "key24": "3v16BoPpScBPZqMJwqckhb6CZ4tjfHjUx2EWzTdvNAVHyycVPqGYnz6RiPuFUSUDw5L6utuhqeP9Z14DimYWcvtC",
  "key25": "3yDh6x38zDyE9MnKSUEjLSYMnN1UFRovRx2rAFLcRbJbeRfUn3Wo3aWgaiu5BngJKhDnx8bBjrRgtvLxCGw6gq3A",
  "key26": "4CRtDMRSUPqZTrdm7oyuhXLMJbvRpFb6DTjejRZhVfW5BXP65ikBpdWF9HKNErNpUCNbUinsm3LQ9fCpkGAhtF96",
  "key27": "3vWne2NBJV6yG3mmALY9D2jpvMZuJ1ypGoKUZJwjYgoton5gHvEP2xGYkNzcvuF14tNuCZdFSrGNL8sXrWWegqMo",
  "key28": "4Vopurz9m3RqjLVivqGvicRNSGUHwdKtHyhoeKnzZUwPxp1ZEAPTnW3vjJZRX3DU9cxMbkeXe4aG4Dg4PaF8ETJN",
  "key29": "42V6A2m6yGzsyv7K9HhrwVHTxzdCDTKbnSGKzcwghEGyRRWtjLW1m17397UYoYdz844zpgS4BqurmUUiW9BmRzbn",
  "key30": "4NvvuzKGdk44UxyRrZ3qQrcKLbiL1RPFeBNN6RqdGSh9gnoW43ovE1byZgkuwd9QGVVV5eP8qPFkV3S1T1pZB3ak",
  "key31": "4jBmhk46mUzZzaSqA675gLTP25uvsAAJSkyKxdTs7A4ZGUzXSYYNhGbeJCabhU8xWVSmpKDZ1gCk7ayqDggS9gaJ",
  "key32": "4r766TnJb8UhXankSix65XXfPTKkc6y1XPhbSo9FvqPxqDxYkcCLoGQo3EPCMJ1hTpgdsgydTFJkBjxyD1ueD9u",
  "key33": "5sYU8pizpfEc3cvWVvC6omWor74cpNu9ZDffszwVuiBWc9W4AyZ9yaMsiXMuk7HQz4dcu5uTHSyyyMrakX2e9hDb",
  "key34": "bsGy2V4MjWaZX1MmicpBsMojewANL39Mx3ibaqw2AP3FA4MK8oj7FzdZn1fSJTxQofYXce1EdgCyPrnNHRmq9V6",
  "key35": "vGkSR3Lk1yeJFL3cXKxRcmeqRfytqxij8N1e3XGDh7cUZyZEWdtngGXnqst1QrQsbE1xdzqNmS3WizpLeKno5e1",
  "key36": "3LFVrLqKXMX9qKCSChhGZLJhJfDZCvuRSuUpoEq6Rxgpm6eFm2YTmS2Wg1sGcr5cWb8eaPPAM9Y56A8AkZEqonZx",
  "key37": "BvZ5Ejd1whpoSXZvC8QgCWeSYRYmAjf3n5dQwFqwP8Z2yv8Hb98oakLjihgneZ2wG5KgAExbmbRd5joG1mJJs2Y",
  "key38": "2QdmhaCjSWMfiA97YCzjhusEco7ckPPEGFguy7nkMEHrM29Sx64o3MzThQtKYjPa5wma5NxBE33tPmS8jsXNkaHK"
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
