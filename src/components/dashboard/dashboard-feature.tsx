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
    "4i622aVskbWc7UBgBx5MLQeGriNQrvBecwwe3VmEJ7ibfZeFu7y8MV86T3ZRxZmxbr3wNJ8fzM2PSPsNSWYwTqhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GxMksYDWb36w5ddyxciJckXjbmiS8nGtCjEdFAMbLGEnnjncSEiwqQTgHt7o7VwYLD3iiG1RdcbkPgfeXFCLp8",
  "key1": "3JiDG251SXMY6Jr4s2zLVcnnmKzCcu7uCuiK4A7BgZ7DND6fqyUUwy7HsXK1rkbhm1GqYL8tem49pUXrd8qdMgMp",
  "key2": "5AePnAjjqQBZuAFAs9EZpcfrKU9g1W2MDUNcVYKc2cmUYR5y83xBPk2Zar5AcaFFUn3iP4XSNh5BuEx4Hk7Zku2t",
  "key3": "5KGgJhnNrEGZW3cXkwmZF9TYZCH1vHi1tMXtdpG7hjMbpptRXukLaBx5DSgwb9TPvTa1AJ75fiitqwPVuCLAPnTU",
  "key4": "2AmHsbRha8qGdd5Vmfr3bcn2Fd9jTEbza145JpVCF7Xvo8yAatWw8UxrxtGcWxd7zEETbRiz1Y5mDRf1KVMRWFSF",
  "key5": "5Vnk4DFv8eu9CovreGH1n1ZJycEfByhygX7KwFsoGQ25zXuU2vPFHP9woHvUrGoUNtNdSaLQ1ekwAUL1m9quVeca",
  "key6": "3T1ZhpGTCxjpnYrNJb6MNVWUEzyaituzYHgwMWyxok7urNPScozCwrzKHcZ16BKs2bLp9FgoXBYhKUPpSZYoTis1",
  "key7": "5QnSgTpNKv97dQY8HsVX2g9bpZYJJRzcCEGoNBxp2SLFYoj1YG3dTV1Y91f8ouFviogWiNbDoB6ccGFAPpKP8rfi",
  "key8": "JgbLaZtsZhWRtohRBxAAJxpnBNusLWWBvKJtooCZzZBMMoHrDdx7iSAGrqPSqr1f4aatRDLPhAmU9vYUerhaaxb",
  "key9": "3vtgGtEwwVL65D9xdzUaopGZbZh8E1mxB1rcBFmzZufnakTMUSgecooY48Nv6sKLb9y4ZUt6vf8o5c1deuamP3Xp",
  "key10": "2PzFR3inVMhhumn522EG1yB2CENZwEfukZuxuCknMpSMBn5evmA5XMQCHrbfzDLjgg8EFn2WMDSxzdPL2a3bvdt3",
  "key11": "3JEn41JD21bScL4buqgok2pnfrZf9qN2BMCeP2yogcxSUPWFT1JrDihAw8h7SKEJwPQJ4nK78MvDA3f3WquqEoHw",
  "key12": "5t7vmFbKMT9jvc9UdyMykL5biZFFua4XSMkXrbgUKzixkJ8mWyFsbqfB4Hadt4rBX6o6StCu1BcmB64GwCd3UUZQ",
  "key13": "24T1r3HGHC2wu9zdKw6uVfUNLQ7zP4GXg9CXT4Q4S5qhLYgAbCM7g5D4bAYsMqoP6ik4MHeBBT6GUAd9zBsiun3K",
  "key14": "4f4aNANciCCfb2CQ3fecj365V8ZFpUUxhBXFMHi2oyLgippKTcWCVsYv6ASPp2PRWRWEEqBYkfM2EmFLucK7ZSd5",
  "key15": "o1n9WLkRwqGgGCLsfqPip6PYwm46U7DXnJVeJWtnPjMw288qk3wF53LNGzQYaWc67vR4sjTMzPxMwNyYhDFyYzw",
  "key16": "4pa2izpEyoQ2BD2HG2DnA4tJEXYubTJjhr7hq15zqYXhaEYPH7vy632kLpuH6sPj1WgUZ15N3659VF1PsFHziorf",
  "key17": "3aGySTDNkRRzuu77mkpAXJbrHUCrPHwpQh2r6aWe8HMfDcjd6Sa6Rqh3PRznDmc2Gpqv38XPhXNsEAnc4yNU8Bbe",
  "key18": "5v56YNfGn1izqGhSgShGK2JTxStsWpNajSjwpnr8FPwomHLDkQ8urMCJBmK1rm4iaFh3CNaiXvebjdFFHAjhzenX",
  "key19": "4jxNgTLp3ZduH3NvDdnyjT9n1P6M6eLzfdiySEewRz1Eyu72XNT9bjC6PUohgqhy4Sf2jc7eFuSwszjcqbpadHqn",
  "key20": "3VVoqMKcB6DY5Fx3b71RmBsia4Ty2B5eURRYYB1dXGHHcYhq4PzbsGeifAS6vJDF4DAHU7NYfs6GYF3zvDrMa6ZL",
  "key21": "5wNqzpMV3budU5BcscRzNU9RU8xKjzJTDUseys4Jd7qGrcrvo9qyBj4cxw96NGFbyh4uSrwDarwYm8KeT4dPKEgN",
  "key22": "1SFdPVcu4QFydTPmXGZ4cXPN25K5NyUjy4LUHpUKYhiP3a4xATJPATzEdo3h4YqHBrBz7WHGjPZCoR4ciaCBDGq",
  "key23": "47NPHX5hBCDggpS6wEpX7U9rejFvnNrMRirjUfH9GoSk2YwLNnhSwKTQDuR7zuPgD8Tb5mL5Z84eFyvRgFaUKMbk",
  "key24": "4WJdEx3Fx3n3NTRPrSjEgSgub9SuabG1hcL4UymP68FV7txoacWk8x9H5TPYADCH7SgodSWvXxFwL1xizebUMYza",
  "key25": "4Q3QxUX4YVDvckPtbVsEqT2pSQiHopCZXe1FucmRFTE8BJBSAaFgjtriZTMJQmFhZkRrThiEcdS5jPuTLEDYJQ69"
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
