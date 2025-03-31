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
    "2zJp2yxkrDCdtEsMKP4EtWqtdMugL1D7LHyG9cVgZ6F1UbJKkTjvubKoywVLcwWBKBuZfnP1ZU1ugm3UjETaqHT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECZ9intNVqzm1rmDb3VVkzZ8tUswAB8BR7USFBR3xDNDvefSge9iRq3QQv4eFashiumCCwZ8f3KhYBi3Q7qJVmp",
  "key1": "21TVs5H8Vjg4kAnpwdELi99Ar64jPs6HtrDGhihre3DFEvM97nJRFWnsYhKePdtxh391TJmRVgxPQFzdDr5PhQrv",
  "key2": "121aQM22X4HYg8DsH3Bo8ThiFGhDEFNifrRrGMYRKmHYfdjTUjit6pU1bYpBWVd1cut5jRFj4z7evUG5tJ6bCpDi",
  "key3": "3B4u5NrWqHEqHARjN4167P5gGBsqbebJZHy2XZNBbLKC9G6jYkmbLc9PbRGCkJrgDrzc2iTgrzuwvJzxWtJDyrfQ",
  "key4": "3bzLirZrzhH2yetMuHLcBNi6MKt2a1W4s2ZbR3BsdXQRXuuGqUZ6VTmZE48wgg3qksZHjJaTjaBTFrS3fS5oPdHq",
  "key5": "4Mnvdea2nXrgmD5LZany2LAsHpBtFGrfsB8WAgrVfVFVimkA3tGncPf4NxPwS2XFGFfwNnPABZ3gL61ftSb3mW2T",
  "key6": "2T9bADPjX63C3UNhjzFzpkVr9e1qxW96ipR7eWrWZrCghbNTuoErqoN9wpRHjz9yVNtVRk311Ne3ProA4HVPGsCG",
  "key7": "5iTEnEM4NP1NDp6pRTnEBDB7uzWq2AwNuqZ8yuHPi47GXUmWMFWzkaMyBgeJ8wrDpJvqeC77wgxYSHqggJ2JqEQ1",
  "key8": "3uhyvrSvWAUg76RH4vVUVGbEwdXqpvRjE4HSbk9WTPRJWsR3HqhrWJJS5vq4gnpM5exYjDwktF9krW9syvvzjyAV",
  "key9": "8Nr7xJgFBon6T7Nj3V8bTPP4Yym6dd379GN6xgKBMSVTeZUBSM41soV9nfwX7K5p3x3TdDn1DARxwugQtr1LmBR",
  "key10": "2cvaLTk4trk3dwLSyei9fnTYdvnREFuFAZFGzoViMQehHWR2rSNCyp8Ec85a6KDVhNySxyS1oQ37Y2r65kVvbY5i",
  "key11": "3Arf1NzkkcozUp4ZcKRWnQHpwpZirCSPzfwr4boaEm55mvMXEdrfb7gkEVLnH4LnytUJNUjNMBVu4wAdpCnipYGi",
  "key12": "37Jt9pXZh3NTJumN51E296JrrdPos4avKVCZvsczpFvdhHGj6CzraUYiR9LXfVeT7HwyjByKKm1FbiNAJypnFnfz",
  "key13": "ih4JKpP5fdJhp2gzG3W4XcbSwVuD8mX8qK3bno8Z9bP7BFeysbN5V6wTdqY6mKFnpj26HmT2Py9TeGgjnsGo8B9",
  "key14": "NPnKJH1mqo8WV678QwDQdCLftPYik1i2Pq9TyQNR49DpTKfFsr5onMcmofN7HcZUghZVpfMvfVQftTYXDLW5wa6",
  "key15": "2qXuYxqCQzU4rYSys6aEqrxKSdD2fPMyWCGYd25DepJQs7yFLxMdf8Z8c3zDpLUuZwTYBdpMzdxkxJyQCp7b68ZM",
  "key16": "GtpakfUkKCHfwX8BhvQ3k2DwhUz9z47g1uYxGci2c44nHbBC4C42o8QX8W5qsVWp4XEsiBFWpHYauv1VkjKCKG2",
  "key17": "2cDhg2DbfVrACHn2K1SPnh1DfP1VamzvajiC53ZCDDyoHGWrBivz9xLFkFiysCVsraekEH9gMHABZ8uxy8V13joC",
  "key18": "4Po1RzT4mrH18nWy9NBoUnYpyFSyfCXTEuRpSyTcf6H7mtEszkhoe5pZq2veGroLJca5eBftc5m4DmaFcU9Br3on",
  "key19": "3UZnPLWypLvLvGziVewYN8eNqZYT8yJZQtUjWMUqu7X1SwNPmwy5utuR6DKs8ckxYUwKfnzauyQHYEDC3x9dLU6q",
  "key20": "25k9oFdGS2CubKmSn9TR9RZNoZGNvALcPr5CngHa9Vbtzx6iRwqNmL75hMa46TqFc6qkBkZRjzWRNfKYtojfSSHY",
  "key21": "3sUFeeqLPZZviz3VxfHoWCRNeTm5NvTGbdyrhpTvZshL3bWUup8JVHkhiWKPHto1Tra1uQHCeqiVDL8yGparj8GK",
  "key22": "3xQKj5kDKYnefZGo4kDfVmhyaBMDCePRRZK4pPo6if5pgc7yTVaQ3BLzF5wenKX7VQNvFyru8rUALCe8ZdtAPcrm",
  "key23": "3yXMxgowF47c6gcPMTTiSZ94FB9JBmCwksGTrcHno9PVxcGo5Lpj9E2MWFTgFwTAbqLPXwvaEcp3Gj3qPzs2DoJu",
  "key24": "4BS7e3VeDV4kNvJGL6TwqnJbsWTLAJKejD5EDNCr6WFWuena8eAPq6h5RBKTzzBFHZV7m5yRhsn85ojDm24A6PfN",
  "key25": "T3jaMPRTcff93mmwve1QY4nX4R1ZDUjhSpX51gmpeXo4TXzUiSMsSjJt9gX2uoLSog8UVmPX4shd3vnJgzMZUzA",
  "key26": "3Y43FtzexYJNbhSAL539U64EZWkfQLwi7uZcAyXQshPE6f2bNrxJnrBciFvHoBh25w8tvg2KUjjSmBQ7TTtwJMKa",
  "key27": "52WYFtNBVHuaAeWKSt61munrhJHwYvxxa7phA42BJ2WsrkkePrGRsih2no9S2SctvVeSGrfahABr8DgTEXo1EMD6",
  "key28": "LdpHK7xFSR4n8wKLaXcB8AWzEL745b1KbHZcLmFmTETjDfDemNJ3bPoeyC4yngXSReCqPAaPVm4A248BRm1f7MD",
  "key29": "ebbw2khHGXB7jkNTVjNN219CasK4rLDEei8ZFPjLmLWjudby4qfcwqFP4zhEaQTt9gNRpR7zLS4jpRJmP1okLSn",
  "key30": "52d4DDb81onV9RzDf5CiAzk5Abh75TaRMmi3n6gZ8FivhQgU6yvJEYkYk6r3D5YSx2zQwm3Czb826UBz9oPLCBH2",
  "key31": "StEv8F4eiNJ1JahYAK3zBP6y7Yf5BK4oWdWFFuS6D6Fs7GS4B2Fv9P2Co386u5oFySwZZpBAXP1DNTnUtx4LqQm",
  "key32": "5TPX2Rp83i5qnzdzyDcQSJeMJLH7JUGwLabuLmZUxQrW6P471Yoe1RBfYewnXCrgqKcCTNFnVL4cQaBi7CuaMRVz",
  "key33": "3KkCbnj6cbGKrXSnf8JqU2GFykR9pPPKeTjGZtPWD5Qur1ipBsUREEMWxtVzBCUFTe3CW2QhoNBygAp1j5h6aahT",
  "key34": "4NjVtKnf2ZtH3TVW7DN9uq9btth86QuUvkC6dDktipP1v2KtT56QMmpwDyw1J3epv3xbktgV3Qkz52Lo6yEP2jqk"
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
