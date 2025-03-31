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
    "jXEnSVfVqr3mSA3DMEhHh8qEBfPHXYi4GSWXSeuXhoriSCDgv1YijxaRAxJGYgrtn2TZufefjAn2BL2sh1KHcZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgVDHgWWZBUVCo7ygAa8prWDMoStkB47eQMzxoK93udnVy1XGpUoe4iKpfX72ZSGbedLff4Cx2TmkP22mTEBFeN",
  "key1": "4DewmWnLAHQKou7yqtjTSjhqRRY8sfSaSSB5maKgJj3n597bCKp1U5bAgWJsCi51uUUbTj9U8QoTByocFog3bnVt",
  "key2": "5KdP6AthmMmEtREPnLBxFKqYmmiD3Ab4WtduB9zQ6vFTWozqsBBk5Luy9rB75Wrjb5y46DbfgkFaPxtBGzZ3goSu",
  "key3": "5ZwkTi5pGXLfbVzMmQ6FD4p1iyLV1LuDF1qXEaanCDf5q7wZkdhBoyHC5ww3fbeYPjnohcchTSadZFmf5Fsk76dL",
  "key4": "58kQbp1NHXipqD1oa1xdnFFYknjvQ578a4j3JsP8PGbGuPeKMULup6pNCykD1iSh4sXPYFkJX5m2SWKUCKdW53c6",
  "key5": "J4oUdhavXrbD2nu1tEjJf3qYfmCkaH7KqgfJgMLmuFxZWWBEh4awR3DvmzMCBg6CrHYHQLx4xSLXKrChhZ8u9Fr",
  "key6": "3yjkk2wphU8ZdRFNnwPDvDUQ8iqM2xRCwp6AjSvpY56pPeQ1VUxmSZNSYzfKAx2X23NGQqbW6m6qtUZXREn6V5Tp",
  "key7": "5myf8wLbS1pQRoLXV15dAcghcs3iBGjrHSABroYZwmA4AeuZLfC6SmLdVywwbgZ5WmYkXGWgpzX3x2X3CJ568C3L",
  "key8": "42Q2PtCnCcjZ5vMDfKCQHQdpdq7i7WEk3ENs546SyjiWLjSsrnKW2Y89osbfk4eTtAjcytpdR9rTwoZYhSUEgC7w",
  "key9": "42WJMcDR1DxKDkhAcX9QZsVbWhfC2jLNeb1bYQZV53LAeLbgQ66a8zrAaBnG6qWwFV5sAg3mYazypmoLGU2tqMyo",
  "key10": "5GsPTdcTX3MdU82Nr9ww1f22Lza2bRnzyua2uMmL8qadCbedmjo6JDafoKQaZvApM7fJoedTnFV59Pd8MgrghwW9",
  "key11": "3ixM4Dn58f1B36bSnc3KUpJdBC2YMjCFZNWpCNrxREpb7PRnDdwRFfsZ2GoSMze65q8YQ8oWzqkJ1kG8b71PECwN",
  "key12": "3iAFK4mXUx59VVLsxwWCBWePgjZqkqCdD27JvZRToQ2RtAkkfgtMW7tEBEwMDYYVae3dnq2kq65WwfEbjEJU2oJS",
  "key13": "3XGN59VDwPtkFxmVdeeqh31E9M7CNufJZ5aY6FcVymbBwQQik3JeDFZioXoNjq16HZ41FgPBoaAkvcG4Fdq2yWuR",
  "key14": "sWUX5hbH9pc9fL98CWL1XUQ4dUw25Ut4NMqFjGm8GxCvHdzHaPiQZ3XvWwCaYKDS3p4jGvXFHxKb3wF5GyhnENW",
  "key15": "3bzh73UTHudvBsvz62eMHEBTJCsyZjQYSkEyVT5CtELY5dmDh16vhgSQb3FneqQsL4tACBrqxCcjo2Xz8S9LGmk2",
  "key16": "4NtTupc2TST73tuJyW8dnHgTn466DZifxArymTKusmTTxDZxtZj72UcFMt3V3oqUHsA23Hv1jvwF873zLJA2DrTA",
  "key17": "39Pb84C3mBC5cQNNMuxEWcfLCCXKJraoaar5Uv8EKZBuh23jDQT1fDpKjoi3ZiXKa8UPb8Rt46or3B87HouRKPtV",
  "key18": "2PsaHRkypmyNjcXwsh3WGg66Df8SxQkAZTumdptrALy346mKK8TSjqb6DLGBt3Z3aJc49esiJbX71Rtthc78kyHe",
  "key19": "TBngfuoSH4QaQDXLcptan61iff7bhSNEXfWj5vGwCka9Gde4THSWihxkFF6qGxWJtMQHtpbDzuKBgKwDMYCfidu",
  "key20": "5bnDsij7y8XtjGqCSDQ6YoDVZcbbB9UJsp1ky2Asj9y1u4o8aSq5cWgsjiJjM2x6pbHeGGJFzn5ZRR7BQdZxPijD",
  "key21": "5WiVJJiGpW7wHJcLjQRmswvas5uchfx1zaB1H4pyVoDLp7d8Jzqop4okp5FJamjbPXRcH1hScAECwu8ujYBERwqz",
  "key22": "2UsEfV8LSrzM2dyt9Xg2wcvc4d9ePSbFCH3RCTmPa6RMorsQ2A73HKktMGcyDUrf9fYuXvZ5wagKzw71dvqzeQxk",
  "key23": "5TGq5BW9GfgGiZ2HLa3HPefs5v1nuAHiygHfMkUrdjL8AVVX21uTZaKU8YE5hgjc1QwTECnD9VmLSWEZf9r9XxH2",
  "key24": "ovMWUevh61cGFMoyRmvMvyRoB564857eyprm1BYNxmdyj3UkUCTdr3ibsrYKY3K3DaPQBxaSUQTLGC1HcYez7Tz",
  "key25": "2MRaQP5a5i62pDvfGZDA8gpGx4ybiVDS7UfXoesxizw1JcCrdsUxt8Z7rV8V8oGscGBc2TDyWU9kFuvk41ZmSa4H",
  "key26": "4e4CtzSaxKnq8zw4mruYLam9KSg8mu63utUewY2N3dNiJpbgB44AsLhCh1hTZ4YBjKm8r9VuSwxwx6gNZwgb2VLJ",
  "key27": "3aTxNssNb4cWjhgu9WZvbCiEzTi6NmjRWz4bxC7Vi3rRkvfPjSQrYGeYdwds6cAog9a5c4Zb6G52WU2hp1QgvSRv",
  "key28": "5cTzLxNBVu64Eqf8BWCHm7RLFxkFPdvUgaZ2qNktyAJGfT4fVMt5hVej4EwNqrVfqaXVMKSkyuag9bc2DMTBTRYd",
  "key29": "rMPaiNJhjWJVjVPhK3egv9SY8S9iNCiL7wSrbimZifYGdvrKCShKn2K69MSvZGv714Ep1LRRodGk2dzR2nzhAXh",
  "key30": "EivnSMgUiQTDXEF5CNSXn5nNgrvaE81Wqt4emUnbpVZqnDYrqMrjDr4uSFVhzaA1oiq9rpSJSQKQbFVg9X4hsGM",
  "key31": "2WEU17MiMynSnFUKkGyrSAm52wXNRRX7o5h5YHAP8qQ3tGnpGDMwcQUaJpNX4yXv2esJSP9P6YaDFmBbdqrFbYy2",
  "key32": "2P6fLjMvmNoLyxg9xcFsXyzNCA78525SCBshybi7dyXLL3uPjo2H3AoQJKqMsajHU8zzw6dV7WZvYYv4NStT2U5V",
  "key33": "43aJnPjfhFTML5Ghm5b1kGWdQR1bkAmM7i3CYLkq6rjUrp6CcNMPGSK3fJ1puTB2HcbjYobJAR9qHtSYDRssERYd",
  "key34": "5ZQVQsTruR3LjxZkponsz2e4jrLmGqyW1JHSzt2bUD475oFA46uG7mYrPRf17hs4QidaDfzcAcandyM91L5Y1YXa",
  "key35": "4k25TSN8rDJVXSFKwEZ1r7Pb9BeFfmbdswTWgmG2qbKc5JrvmRacXDmhBwf7H5Pynkrnoq46cviDW9J4ZnAHWPpa",
  "key36": "4yxou5Bw8fTXECtEyW4HCWWAsKSoDriGFfTMgQoSjPr78ZqBDcikgkSMeqcPNQ9sxiVJcMpoboxPNE6iEFyR8KAF"
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
