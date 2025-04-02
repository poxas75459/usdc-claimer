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
    "23z78xGgBKK6gveK1hZ29h6aR48fFsqwHpKS98PNsTdT5r6fc8qQ4ccNBv1Wz4PHAQEdCxrym5jHixXQUwnuTLrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGWkTArCcbJzRJapEoT4HAQtPAW4ExScKSoyYM4bnKK5xXJt9odh98hNH8FeaWAmgHkLjqcGHY57GsRtKVduW3n",
  "key1": "5v6rXwCVrMC5g7GCZP7ZZAvmnrdFiEMypyMPayWAgsfr5C8xVSzDVDYU2pmj5vfjYqymD3KZba8P6FrCqk8p72DZ",
  "key2": "2D9K7rCPexzJE977WAL8jpXgkr7ad1sgc52BBkmH1KSHgxXp1jS9ZpaQuct1d97Zw2RSt874wSfoCB1G4NG7B2YB",
  "key3": "5NX92d5WU72S8pA9QYEwzWZ8xxqC1wLpiMrWVQGfvVYaZqmF9vM2Qf5xxMnFboUZCngYL3msdXYfycH3xi4oSzeV",
  "key4": "4D6QPXwVBnxVy5ppc4vwL8iu7Ag3SZfxBkk1RhAnhGt7R4cMLUdMpwsiWZGfbjZjqYr2PNu4MJfHcut3vzL8cPyQ",
  "key5": "2Ln6wBjCGAgEHXDxQTP5zwxiAjNtxkkQqvGvz7hTVGgCufMXfcRJEVgQGT68BJmC9RerDXrG6dT2gwUc3x8GP7EM",
  "key6": "3Dm1d6D9C3UyywwHKAn2JhNVtV41sC8d1ruJyRt2BYqMHHEK4Xx3BdJQQ2ZLLf3vDPSoq9cC41HysbjYe8QgVt8f",
  "key7": "5Cg6xe1Vqc3GpTKj75C5RhpVSYP3f4yT8qZRSTbx7uzTmmoSSF2c6rtaiMVGfXak9RLDkw3SxN9tmhDbN6qd12E5",
  "key8": "3uvPcZzw37eQ4CCEud7QioJYdLDwfBittgjC1jkpbo5hxfBMbhXr4EwVjnPVwiAQmuBMarnbySACyUA17BrBd6U",
  "key9": "3r5Xa8FT4BaL7ySp6FPnFbavzPNRT9adiCMEgBx96wEoSvhVbpuCazSysBXgdvbywGTw3LYUhhN6n8EHhF4rveHC",
  "key10": "4qf9bjdULGc2gQHk2itzKdRRLU49YvQ7yCgiroo5ecCTzWq7VFkQWMajLQ5rNdevBtEVqojNcLriQoDqiCPdtcRa",
  "key11": "34UeX4CxZHcSg9xUNCpN28ziXM8DXvSQXtLAoizqS2tJwJW2nhVtkvjEBvYpZuc9bHabZSBmfrVg5p5hVHmesqF7",
  "key12": "3MCZapCxCdSRBryaUMuYd3yFw1rYwiP13izJALYj3cenE5aDdsHeguwK8QhGFVbvbGkZ3bryBzGQDyVkkDJM8nPv",
  "key13": "4UaDFQcpgN9zjp66r3bazgp7Hq7PJ7cmoTBNwJFSkMTG4Pyy4gTSJwN2kDbD3awArpBPK9qfAa1j6eDKJrv7TJB8",
  "key14": "5ztxjwpw6QdpVXy94DgQm6TcZdzVMngssjYvQJa6LXNd3QBZ2EULvAc4mx1Cf65njzNtnuFAEzmD2HCbKPobRYgd",
  "key15": "4KQBkFSLYxxMh1c8toGqbUdBPkeJa1J56nqW7Qe8v3aivP5NyJ9En7g2cmPABh8RcFbMwkx3f9mGqtmvNkwqdU8s",
  "key16": "2ANdtuExtFs9msJKttRDsLmPDBZSkRum3tMkaUNAymTCJG2FAJXpycQBNv9RirsN84miZUszkBsokvhn8P14mjyS",
  "key17": "3YzhyUU5ZKE8CxeDekh92zdT1PC5h166s5njZgjWk7Ch4FxZav68XvxsGypCpmj7STFuFhgyxbhZnAmZ2jUJ3gyj",
  "key18": "4xN5tJZBEhMQnrnUCxCprHnzTmiDSMLihnSMXWwadWTCaK97dZzK14RvVe4YJ2camo5pV5DjZQNnkp6iWcFpWiNJ",
  "key19": "3EcGTw4Na5Hqs62Sv4VDpKiukxdtTtxieEcgt242kcKwnNnp45PgYXCphjvhT8fsHPvFpEthVBuNAzM5rhBaaLQq",
  "key20": "5hzDJgyKcrvPCxaV2BYToZzo99Z9jAC4LXiCmKcqU4QPHu9ysH4nYfXUqhYKmHJsSUGs5Ui8ntJahKjTG7Kmg7DD",
  "key21": "5YD1WHy3YWFHRD3wWKC5oi1NeJ7QztNJW3h4mfwausydeG1nd75nvLanu1qvYh7R75XF2eGQWQjptuv9kCapzt9P",
  "key22": "3KUPXjFrs31PGggwHq2zJU2oL9CBoPr65dtdbUngPL3z2rosLwokKoRqcPc7JbEswAAzFEgtrP1cREBJ1i5xHGBk",
  "key23": "3WJ42nkeGqitAHKBHLmZug5w1MWfZ4ai6iZSSQprRNEanBJHry13eQxUeksiyXBnBiUgdSFFDF6BzRhFoPFwJ5gX",
  "key24": "3Phwg5SXGNNRez9aTuJgqAvaDBgFDQzDuodZnhUohBiWK5upXV3M9hKEtw1TW7cdYgi7VoiVLkyXVbXq1XrSHW1r",
  "key25": "26UDDsAz2sdRCqVPF3KLBKsQahWoG7HfmanQDNv53vZ27ZFmvErvwcXEVrhkh9sJUJnmMuU73iVxiYTahTxv6n3r"
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
